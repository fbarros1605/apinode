//require('dotenv').load();
const { version } = require('../package.json');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

/* eslint import/no-dynamic-require: "off" */
const envConfig = require(path.join(__dirname, 'environments', ENV));

const config = Object.assign({
  [ENV]: true,
  env: ENV,
  web: {
    port: process.env.PORT || 3004,
  },
  db: {
    dbName: 'region_weslene',
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    pws: process.env.DATABASE_PWS,
  },
  options: {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },      
  },
  name: 'apinode',
  version
}, envConfig);

module.exports = config;
