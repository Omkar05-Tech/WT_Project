// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  scheduled: { type: Boolean, default: 0 },
  scheduledDate: { type: Date },
  // Add other post fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);