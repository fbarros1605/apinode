/* eslint-disable global-require */
const config = require('./config/index');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db.dbName, config.db.user, config.db.pws, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorsAliases: false,
  pool: config.options.pool,
});

module.exports = sequelize;
