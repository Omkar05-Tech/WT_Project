const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, async (req, res) => {
    try {
        // Replace with actual logic to fetch quick stats
        const quickStats = [
            { label: 'Scheduled Posts', value: 12 },
            { label: 'Published Posts', value: 56 },
            { label: 'Avg. Engagement', value: '24%' },
        ];
        res.json(quickStats);
    } catch (error) {
        console.error('Error fetching quick stats:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
