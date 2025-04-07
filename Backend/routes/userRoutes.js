// Backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const userController = require('../controllers/userController');

router.get('/userData', verifyToken, userController.getUserData);
router.put('/userData', verifyToken, userController.updateUserData);

module.exports = router;