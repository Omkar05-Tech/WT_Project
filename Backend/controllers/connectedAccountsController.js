// Backend/controllers/connectedAccountsController.js
const ConnectedAccount = require('../models/ConnectedAccount');

exports.getUserConnectedAccounts = async (req, res) => {
    try {
        const userId = req.user._id;
        const connectedAccounts = await ConnectedAccount.find({ userId, isConnected: true }).select('platform');
        const connectedPlatforms = connectedAccounts.map(acc => acc.platform);
        res.json(connectedPlatforms);
    } catch (error) {
        console.error('Error fetching connected accounts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};