const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateJWT, authorizeRoles } = require('../middleware/auth');

// Inscription étape 1
router.post('/register', authController.register);

// Inscription étape 2 (complétion du profil)
router.post('/complete-registration', authController.completeRegistration);

// Connexion
router.post('/login', authController.login);

// Exemple de route protégée (admin uniquement)
router.get('/admin', authenticateJWT, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Accès admin autorisé.' });
});

module.exports = router;
