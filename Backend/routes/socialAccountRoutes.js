// Backend/routes/socialAccountRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const socialAccountController = require('../controllers/socialAccountController');

router.get('/social-accounts', verifyToken, socialAccountController.getUserSocialAccounts);
router.post('/social-accounts', verifyToken, socialAccountController.addSocialAccount);
router.delete('/social-accounts/:id', verifyToken, socialAccountController.removeSocialAccount);

module.exports = router;