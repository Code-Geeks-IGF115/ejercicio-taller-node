//jshint esversion:6
const express = require("express");
const app = express();
require('dotenv').config();
const {sequelize}=require(__dirname + "/modelos/db.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false });
        console.log("All models were synchronized successfully.");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log(`Server is running on Port ${PORT}` );
});
    
