const mongoose = require('mongoose');

const matchingSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scoreMatch: Number,
  dateMatch: { type: Date, default: Date.now },
  statut: { type: String, enum: ['en_attente', 'accepté', 'refusé'], default: 'en_attente' }
});

module.exports = mongoose.model('Matching', matchingSchema);
