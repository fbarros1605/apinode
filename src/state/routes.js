const Router = require('koa-router');
const koaBody = require('koa-body');

const baseController = require('../base/base-controller');
const Mapper = require('./mapper');

function createRouter(mapper) {
  const router = new Router();
  router
    .get('list', '/v1/state', baseController.findAll(mapper))
    .get('state', '/v1/state/:id', baseController.findOne(mapper))
    .post('create', '/v1/state', koaBody(), baseController.create(mapper))
    .put('update', '/v1/state/:id', koaBody(), baseController.update(mapper))
    .delete('delete', '/v1/state/:id', baseController.delete(mapper))    
  return router;
}

module.exports = (app) => {
  const mapper = new Mapper('state');
  const router = createRouter(mapper);

  app.use(router.routes());
  app.use(router.allowedMethods());
};