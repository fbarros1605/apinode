const Router = require('koa-router');
const koaBody = require('koa-body');

//baseController contém todas as funções de um CRUD
const baseController = require('../base/base-controller'); 
//controller contém a função específica de cada domínio, neste caso, domínio cidade (city)
//só tem isso em cidade!
const controller = require('./controller'); 

const Mapper = require('./mapper');

function createRouter(mapper) {
  const router = new Router();
  router
    .get('list', '/v1/city', baseController.findAll(mapper))
    .get('city', '/v1/city/:id', baseController.findOne(mapper))
    .post('create', '/v1/city', koaBody(), baseController.create(mapper))
    .put('update', '/v1/city/:id', koaBody(), baseController.update(mapper))
    .delete('delete', '/v1/city/:id', baseController.delete(mapper))    

    //note que aqui eu chamei a controller e não baseController
    .get('cityPerState', '/v1/city/state/:id', controller.listCitiesPerState(mapper)) 
    .get('count', '/v1/city/reg/count', controller.countCities(mapper)) 
  return router;
}

module.exports = (app) => {
  const mapper = new Mapper('city');
  const router = createRouter(mapper);

  app.use(router.routes());
  app.use(router.allowedMethods());
};