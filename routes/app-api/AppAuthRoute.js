const express = require('express');
const router = express.Router();
const AppAuthController = require('../../controllers/app-api/AppAuthController');

router.post('/login', AppAuthController.Login );
router.get('/logout', AppAuthController.Logout );
router.post('/signup', AppAuthController.Signup );
router.post('/resetpassword', AppAuthController.Resetpassword );

module.exports = router;