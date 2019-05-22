const config = require('../config/default.json');
const { task} = require('./models');

module.exports = (Sequelize) => {
	const options = {
        host: config.host,
        dialect: config.dialect,
        logging: false,
        port: config.port,
    };

    const sequelize = new Sequelize(config.db, config.login, config.password, options);


	const Task = task(Sequelize, sequelize);

	return {
		Task,
		sequelize,
		Sequelize
	};
};
