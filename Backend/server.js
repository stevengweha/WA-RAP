const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const { authenticateJWT, authorizeRoles } = require('./middleware/auth');
const authController = require('./controllers/authController');
dotenv.config();

// Middlewares globaux
app.use(bodyParser.json());
app.use(cors());

// Import des routes d'authentification
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Import du seeder utilisateur
const seedUsers = require('./seeders/userSeeder');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 🚩 ATTENTION : Le serveur écoute en HTTP, pas HTTPS.
// Utilisez http://localhost:5001 dans vos requêtes, pas https://localhost:5001

// Connexion à MongoDB et démarrage du serveur
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connecté');
    await seedUsers();  // Insertion des utilisateurs si nécessaire
    app.listen(5001, '0.0.0.0', () => {
      console.log(`🚀 Serveur démarré sur http://localhost:5001`);
    });
  })
  .catch(err => console.error('❌ Erreur MongoDB:', err))



