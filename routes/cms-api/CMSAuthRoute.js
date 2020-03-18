const express = require('express');
const router = express.Router();
const CMSAuthController = require('../../controllers/cms-api/CMSAuthController');

router.post('/login', CMSAuthController.Login );
router.get('/logout', CMSAuthController.Logout );
router.post('/signup', CMSAuthController.Signup );
router.post('/resetpassword', CMSAuthController.Resetpassword );

module.exports = router;