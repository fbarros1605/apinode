const country = require('../country/model');
const Sequelize = require('sequelize');
const sequelize = require('../../conn');
const { count } = require('../base/base-controller');
const state = sequelize.define('state', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true 
    },    
    idcountry: {
      type: Sequelize.UUID,
      allowNull: false
    },    
    name: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    createdAt: { 
      type: Sequelize.DATE 
    },
    updatedAt: { 
      type: Sequelize.DATE 
    },
  }, 
  {
    tableName: 'state'
  });  

  //estudar o ORM SEQUELIZE
  //https://sequelize.org/master/manual/model-querying-finders.html
  state.belongsTo(country, { foreignKey: 'idcountry', sourceKey: country.id, as: 'country' }); 

module.exports = state;