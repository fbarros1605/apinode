'uses strict';
const program = require('commander');
const moment = require('moment');
const ApiClient = require('../src/base/api-client');
const apiClient = new ApiClient();
const config = require('../config/index');

async function runConsole() {
  console.log('********');
  console.log('Start');
  ret = await apiClient.get(config.url+'/v1/city/reg/count');
  console.log('Total de Cidades: ', ret._data);
  console.log('Done');
  console.log('********');
}

program
  .description('Example Node Console')
  .action(companyId => runConsole());

process.on('uncaughtException', (err) => {
  console.log('Erro: ', err);
  process.exit(1);
});

program.parse(process.argv);
