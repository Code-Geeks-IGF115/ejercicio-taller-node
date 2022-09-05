//jshint esversion:6
const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
const { Client } = require('pg');
const client = new Client({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
  })
  client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");

///////////////////////////////////////////////////////////////////////////////////
//every time something is display on screen is because
//it was sent to it so that we 
app.route('/')
.get(function(request, response) {
    response.json({ contenido: date.SpanishDate()});
})
.post(function(request, response) {
    let newItem = request.body;
    response.json(newItem);
});

/////////////////////////////////////////////////////////////////////////////////////////////
//este es como decir el metodo para cargar la pagina
app.get('/carnet/:carnet', function(request, response) {
    const carnet=request.params.carnet;
    const data={ 
        'carnet':carnet
    };
    response.json(data);
});

app.get('/postgres/:carnet/:nombre',function (request,response) {
    carnet=request.params.carnet
    nombre=request.params.nombre
    response.render("carnet", { carnet:carnet,nombre:nombre });
});
/////////////////////////////////////////////////////////////////////////////////////////////////



app.get('/postgres', function (req, res, next) {
    client.query('SELECT * FROM Employee where id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server is running on Port ${PORT}` );
});

