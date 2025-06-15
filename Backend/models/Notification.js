const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  contenu: String,
  lu: { type: Boolean, default: false },
  dateEnvoi: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
