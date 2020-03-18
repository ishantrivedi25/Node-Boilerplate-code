const Sequelize = require('sequelize');

const db = new Sequelize('database-name', 'username', 'password', {
	host: 'your host name here',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	define: {
		timestamps: false
	}
});

db.authenticate().then(() => console.log('Db Connected Successfully')).catch((err) => console.log(err));

module.exports = db;
