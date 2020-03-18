const express = require('express');
const router = express.Router();
const AppAuthRoute = require('./AppAuthRoute');

router.use("/auth", AppAuthRoute);

module.exports = router;