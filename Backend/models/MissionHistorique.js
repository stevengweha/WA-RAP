const mongoose = require('mongoose');

const missionHistoriqueSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  employeurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  travailleurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  statut: { type: String, enum: ['complétée', 'annulée'], required: true },
  dateFin: Date,
  noteEmployeur: Number,
  noteTravailleur: Number,
  commentaire: String
});

module.exports = mongoose.model('MissionHistorique', missionHistoriqueSchema);
