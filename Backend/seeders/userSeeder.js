const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const users = [
  {
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@example.com',
    motDePasse: 'password123',
    telephone: '0600000001',
    adresse: '1 rue de Paris, 75000 Paris',
    role: 'posteur',
    bio: 'Développeur passionné.',
    competences: { nodejs: true, react: false },
    photoProfil: '',
  },
  {
    nom: 'Martin',
    prenom: 'Claire',
    email: 'claire.martin@example.com',
    motDePasse: 'password456',
    telephone: '0600000002',
    adresse: '2 avenue de Lyon, 69000 Lyon',
    role: 'chercheur',
    bio: 'Designer UX/UI.',
    competences: { figma: true, photoshop: true },
    photoProfil: '',
  },
  {
    nom: 'Admin',
    prenom: 'Super',
    email: 'admin@example.com',
    motDePasse: 'adminpass',
    telephone: '0600000003',
    adresse: '3 boulevard de Nice, 06000 Nice',
    role: 'admin',
    bio: 'Administrateur du site.',
    competences: { gestion: true },
    photoProfil: '',
  }
];

async function seedUsers() {
  await User.deleteMany({});
  // Hashage des mots de passe avant insertion
  const usersHashed = await Promise.all(
    users.map(async user => ({
      ...user,
      motDePasse: await bcrypt.hash(user.motDePasse, 10)
    }))
  );
  await User.insertMany(usersHashed);
  console.log('Utilisateurs insérés !');
}

module.exports = seedUsers;


