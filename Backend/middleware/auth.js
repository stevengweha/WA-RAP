const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token manquant.' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token invalide.' });
    req.user = decoded;
    next();
  });
};

// Middleware pour vérifier le rôle selon le modèle User
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Vérifie que le rôle existe et correspond à un des rôles autorisés
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: 'Aucun rôle défini pour cet utilisateur.' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Accès refusé : rôle '${req.user.role}' insuffisant.` });
    }
    next();
  };
};

module.exports = {
  authenticateJWT,
  authorizeRoles
};
