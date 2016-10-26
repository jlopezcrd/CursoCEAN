// Instanciamos los modulos
const _       = require('lodash');
const fs      = require('fs');
const notes   = require('./notes');
const HTTP    = require('http');
const express = require('express');
const morgan  = require('morgan');
const bparser = require('body-parser');

// Configuramos el puerto en el que quermos escuchar
const PORT     = 80;
const HOSTNAME = "localhost";

// Instanaciamos el middleware express
// Parametros de peticion, respuesta, y siguiente pila en caso necesario
var app = express();

// Usamos el modulo morgan para loguear las peticiones por consola
app.use(morgan('combined'));

// Creamos el parseador de json
var jsonParser = bparser.json()

// Creamos el parserador de formularios
var urlencodedParser = bparser.urlencoded({ extended: false })

// Routing para todas las peticiones
app.all("*", function(request, response, next) {

    response.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });

    next();
})

// Routing para las peticiones a /note por get
app.get("/note", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    // Pintamos todos las notes
    response.end(JSON.stringify(notes.getAll()));

})

// Routing para las peticiones a /note/:title por get
app.get("/note/:title", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    // Pintamos el note
    response.end(JSON.stringify(notes.getNote(request.params.title)));

})

// Routing para las peticiones a /note por post
app.post("/note", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    var note = notes.addNote(request.body.title, request.body.body);

    //Agregar nuevo note
    response.end(JSON.stringify(note));

})

//TODO
// Routing para las peticiones a /note/:title por put
app.put("/note/:title", jsonParser, function(request, response, next) {

    if (!request.params)
        return response.sendStatus(400)

    console.log(request.params);

    //TODO FALTA DESARROLLAR
    // Pintamos la respuesta
    response.end();

})

// Routing para las peticiones a /note/:title por delete
app.delete("/note/:title", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    //console.log(request.body);

    //TODO FALTA DESARROLLAR
    var data = notes.removeNote(request.params.title);

    //Respuesta
    response.end(JSON.stringify(data));

})

// Routing para todas las demás peticiones
app.get("*", function(request, response, next) {
    console.log('Recurso fallido');
    response.sendStatus(400);
    response.end("Recurso inexistente");
})

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);