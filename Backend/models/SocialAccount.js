// Backend/models/SocialAccount.js
const mongoose = require('mongoose');
const socialAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    platform: { type: String, required: true },
    username: { type: String, required: true },
    // Add any platform-specific details like access tokens if needed
}, { timestamps: true });

module.exports = mongoose.model('SocialAccount', socialAccountSchema);