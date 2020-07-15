const path = require('path');

const logPath = path.join(__dirname, '../../logs/dev.log');

module.exports = {
  web: {
    port: process.env.PORT || 3004,
  },
  url: 'http://localhost:3004',
  db: {
    dbName: 'region_weslene',
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || '', //informe o nome do seu usuario do banco. Pode ser o root
    pws: process.env.DATABASE_PWS || '', //informe a senha   
    dialect: 'mysql',
  },
};
