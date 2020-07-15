const path = require('path');

const logPath = path.join(__dirname, '../../logs/prod.log');

module.exports = {
  web: {
    port: process.env.PORT || 3004,
  },
  url: '',
  db: {
    dbName: 'region_weslene',
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER,
    pws: process.env.DATABASE_PWS,    
    dialect: 'mysql',
  },
};
