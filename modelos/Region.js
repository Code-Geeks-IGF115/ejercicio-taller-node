//jshint esversion:6
const { Sequelize, DataTypes } = require('sequelize'); 
module.exports.Region = sequelize.define('Region', {
    // Model attributes are defined here
    codigo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  });