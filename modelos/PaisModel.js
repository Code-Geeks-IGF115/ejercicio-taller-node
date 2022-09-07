//jshint esversion:6
const { DataTypes } = require('sequelize'); 
module.exports.PaisModel={
  // Model attributes are defined here
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poblacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: true
  },
  moneda: {
    type: DataTypes.STRING,
    allowNull: true
  },
  idioma: {
    type: DataTypes.STRING,
    allowNull: true
  }
};
