//jshint esversion:6
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize'); 
const {PaisModel}=require(__dirname + "/PaisModel.js");
const {RegionModel}=require(__dirname + "/RegionModel.js");

// conexion a la base de datos
const sequelize = new Sequelize(
    process.env.NAME_DB, 
    process.env.USER_DB,
    process.env.PASSWORD_DB, 
    {
    host: process.env.HOST_DB,
    dialect:'postgres' 
    }
);

// definicion de modelos
const Region = sequelize.define('Region', RegionModel, {});
const Pais = sequelize.define('Pais', PaisModel, {});
Region.hasMany(Pais);
Pais.belongsTo(Region);
Pais.belongsToMany(Pais, { as: 'Frontera', through: 'OrigenDestino' });

module.exports = { sequelize }