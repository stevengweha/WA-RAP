const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
dotenv.config();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
