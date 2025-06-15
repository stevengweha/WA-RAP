const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contenu: String,
  dateEnvoi: { type: Date, default: Date.now },
  lu: { type: Boolean, default: false }
});

module.exports = mongoose.model('Message', messageSchema);
