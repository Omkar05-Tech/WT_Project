// Backend/models/ConnectedAccount.js
const mongoose = require('mongoose');

const connectedAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    platform: {
        type: String,
        enum: ['facebook', 'instagram', 'twitter', 'youtube', 'whatsapp'],
        required: true,
    },
    isConnected: {
        type: Boolean,
        default: false,
        required: true,
    },
    // You might want to add fields for access tokens, profile IDs, etc.
}, { timestamps: true });

module.exports = mongoose.model('ConnectedAccount', connectedAccountSchema);