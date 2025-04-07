// routes/welcomeRoutes.js
const express = require('express');
const router = express.Router();
// const verifyToken = require('../middleware/verifyToken');
const welcomeController = require('../controllers/welcomeController');

router.get('/api/WelcomeSection', /* verifyToken, */ welcomeController.getWelcomeData);

module.exports = router;