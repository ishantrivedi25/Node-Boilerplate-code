const express = require('express');
const router = express.Router();
const WebAuthController = require('../../controllers/web-api/WebAuthController');

router.post('/login', WebAuthController.Login );
router.get('/logout', WebAuthController.Logout );
router.post('/signup', WebAuthController.Signup );
router.post('/resetpassword', WebAuthController.Resetpassword );

module.exports = router;