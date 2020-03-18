const express = require('express');
const router = express.Router();

const appApi = require('./app-api');
const webApi = require('./web-api');
const cmsApi = require('./cms-api');

module.exports = app => {
    app.use("/app", appApi);
    app.use("/web", webApi);
    app.use("/cms", cmsApi);
}
