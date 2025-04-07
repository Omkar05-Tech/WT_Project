// Backend/controllers/socialAccountController.js
const SocialAccount = require('../models/SocialAccount');

exports.getUserSocialAccounts = async (req, res) => {
    try {
        const userId = req.user._id;
        const accounts = await SocialAccount.find({ userId });
        res.json(accounts);
    } catch (error) {
        console.error('Error fetching social accounts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addSocialAccount = async (req, res) => {
    try {
        const userId = req.user._id;
        const { platform, username } = req.body;

        const newAccount = new SocialAccount({ userId, platform, username });
        await newAccount.save();
        res.status(201).json({ message: 'Social account added successfully', account: newAccount });
    } catch (error) {
        console.error('Error adding social account:', error);
        res.status(500).json({ message: 'Failed to add social account' });
    }
};

exports.removeSocialAccount = async (req, res) => {
    try {
        const userId = req.user._id;
        const accountId = req.params.id; // Assuming you pass the account ID in the URL

        const result = await SocialAccount.findOneAndDelete({ _id: accountId, userId });
        if (!result) {
            return res.status(404).json({ message: 'Social account not found' });
        }
        res.json({ message: 'Social account removed successfully' });
    } catch (error) {
        console.error('Error removing social account:', error);
        res.status(500).json({ message: 'Failed to remove social account' });
    }
};