//jshint esversion:6
const express = require("express");
require('dotenv').config();
const app = express();
const { Sequelize ,DataTypes} = require('sequelize'); 
// const Region=require(__dirname + "/modelos/Region.js");
// const Pais=require(__dirname + "/modelos/Pais.js");
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(
    process.env.NAME_DB, 
    process.env.USER_DB,
    process.env.PASSWORD_DB, 
    {
    host: process.env.HOST_DB,
    dialect:'postgres' 
    }
    );
const Region = sequelize.define('Region', {
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

const Pais = sequelize.define('Pais', {
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
  }, {
    // Other model options go here
  });
app.listen(PORT, async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log(`Server is running on Port ${PORT}` );
});
    
