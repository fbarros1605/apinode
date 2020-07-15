const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger');

/* eslint-disable global-require */
const config = require('./config/index');

const port = config.web.port;

const sequelize = require('./conn');

app.use(logger());

app.listen(port, () => {
  console.log(`Service running... http://localhost:${port}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');

      require('./src/country/routes')(app);
      require('./src/state/routes')(app);
      require('./src/city/routes')(app);

    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

})
