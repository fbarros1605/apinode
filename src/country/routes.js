const Router = require('koa-router');
const koaBody = require('koa-body');

const baseController = require('../base/base-controller');
const Mapper = require('./mapper');

function createRouter(mapper) {
  const router = new Router();
  router
    .get('list', '/v1/country', baseController.findAll(mapper))
    .get('country', '/v1/country/:id', baseController.findOne(mapper))
    .post('create', '/v1/country', koaBody(), baseController.create(mapper))
    .put('update', '/v1/country/:id', koaBody(), baseController.update(mapper))
    .delete('delete', '/v1/country/:id', baseController.delete(mapper))    
  return router;
}

module.exports = (app) => {
  const mapper = new Mapper('country');
  const router = createRouter(mapper);

  app.use(router.routes());
  app.use(router.allowedMethods());
};