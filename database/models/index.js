const Sequelize = require('sequelize');
const DbConfig = require('../../config/dbConfig');
const demo_model = require('./demoModel');
const DemoModel = demo_model(DbConfig,Sequelize);

module.exports['DemoModel'] = DemoModel;