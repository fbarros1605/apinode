const state = require('../state/model');
const Sequelize = require('sequelize');
const sequelize = require('../../conn');
const { count } = require('../base/base-controller');
const city = sequelize.define('city', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true 
    },    
    idstate: {
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
    tableName: 'city'
  });  

  //estudar o ORM SEQUELIZE
  //https://sequelize.org/master/manual/model-querying-finders.html
  city.belongsTo(state, { foreignKey: 'idstate', sourceKey: state.id, as: 'state' }); 

module.exports = city;