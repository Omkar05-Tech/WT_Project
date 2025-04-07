// Backend/controllers/connectedAccountsController.js
const ConnectedAccount = require('../models/ConnectedAccount');
const router = require('./welcomeRoutes');

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

exports.updateConnectionStatus = async (req, res) => {
    const { platform, isConnected } = req.body;
    const userId = req.user._id;

    try {
        await ConnectedAccount.findOneAndUpdate(
            { userId, platform },
            { isConnected },
            { upsert: true, new: true }
        );
        res.json({ message: `Connection status for ${platform} updated successfully` });
    } catch (error) {
        console.error('Error updating connection status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = router; // Standard way to export