// Backend/controllers/userController.js
const User = require('../models/User');

exports.getUserData = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is populated by verifyToken
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateUserData = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming req.user is populated by verifyToken
        const { name, email, timezone, phone } = req.body; // Assuming frontend sends data directly

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, timezone, phone },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
};