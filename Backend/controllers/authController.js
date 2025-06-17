const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticateJWT, authorizeRoles } = require('../middleware/auth');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware global
app.use(bodyParser.json());
app.use(cors());

// ===================
// Inscription étape 1
// ===================
exports.register = async (req, res) => {
  try {
    const { nom, prenom, email, motDePasse, telephone, adresse } = req.body;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email déjà utilisé.' });

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    // Création de l'utilisateur (infos de base)
    const user = new User({
      nom,
      prenom,
      email,
      motDePasse: hashedPassword,
      telephone,
      adresse
    });

    await user.save();

    // Génère un token pour la suite du processus
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ message: 'Première étape réussie. Veuillez compléter votre profil.', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// ===================
// Inscription étape 2 (complétion du profil)
// ===================
exports.completeRegistration = [
  authenticateJWT,
  async (req, res) => {
    try {
      const { role, photoProfil, competences, bio } = req.body;
      const userId = req.user.userId;

      // Met à jour l'utilisateur avec les infos complémentaires
      const user = await User.findByIdAndUpdate(
        userId,
        { role, photoProfil, competences, bio },
        { new: true }
      );

      if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé.' });

      res.json({ message: 'Profil complété avec succès.', user });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
  }
];

exports.login = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    // Recherche de l'utilisateur
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email incorrect.' });

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
    if (!isMatch) return res.status(400).json({ message: ' mot de passe incorrect.' });

    // Génération du token JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user: { id: user._id, nom: user.nom, prenom: user.prenom, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Exemple de route protégée par rôle (à utiliser dans vos routes)
// exports.adminOnly = [
//   authenticateJWT,
//   authorizeRoles('admin'),
//   (req, res) => {
//     res.json({ message: 'Bienvenue, admin !' });
//   }
// ];