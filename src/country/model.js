const Sequelize = require('sequelize');
const sequelize = require('../../conn');
const country = sequelize.define('country', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true 
    },    
    name: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    initials: {
      type: Sequelize.STRING(3),
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
    tableName: 'country'
  });  

module.exports = country;