const express = require('express');
const router = express.Router();
const WebAuthRoute = require('./WebAuthRoute');

router.use("/auth", WebAuthRoute);

module.exports = router;