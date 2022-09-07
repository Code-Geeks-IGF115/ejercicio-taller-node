//jshint esversion:6
const { DataTypes } = require('sequelize'); 
module.exports.RegionModel={
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
};
