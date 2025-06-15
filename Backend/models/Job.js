const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  titre: { type: String, required: true },
  description: String,
  categorie: String,
  localisation: String,
  datePostee: { type: Date, default: Date.now },
  statut: { type: String, enum: ['ouverte', 'en_cours', 'complétée', 'annulée'], default: 'ouverte' },
  remuneration: Number,
  dateMission: Date
});

module.exports = mongoose.model('Job', jobSchema);
