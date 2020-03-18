const express = require('express');
const router = express.Router();
const CMSAuthRoute = require('./CMSAuthRoute');

router.use("/auth", CMSAuthRoute);

module.exports = router;