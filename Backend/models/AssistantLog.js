const mongoose = require('mongoose');

const assistantLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: String,
  reponse: String,
  dateInteraction: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AssistantLog', assistantLogSchema);
