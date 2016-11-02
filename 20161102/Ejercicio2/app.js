// Instanciamos los modulos
const _       = require('lodash');
const fs      = require('fs');
const personas = require('./personas');
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

// Redirigir staticos
app.use('/assets', express.static(__dirname + '/public'));

// Especificar el engine de templates
app.set('view engine', 'ejs');

app.get("/persona", jsonParser, function(request, response, next) {

    //response.end(JSON.stringify(personas.getAll()));
    //response.send("<html><head><link href=/assets/styles.css rel=stylesheet /></head><body><h3>Listado de personas</h3></body></html>");
    //var persons = personas.getAll();
    response.render('index');

})

// Routing para las peticiones a /persona por post
app.post("/persona", urlencodedParser, function(request, response, next) {
    
    //response.end(request.body);
    response.render('persons/persons', 
        {
            persona: {
                'firstname': request.body.firstname,
                'lastname': request.body.lastname,
                'password': request.body.password,
            }
        });

})

// Routing para las peticiones a /persona/:id por get
app.get("/persona/:id", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    // Pintamos el note
    //response.end(JSON.stringify(personas.getById(request.params.id)));
    // personas.getById(request.params.id)
    console.log(request.params.id);
    response.render('persons/persons', {persona: personas.getById(request.params.id)});

})

//TODO
// Routing para las peticiones a /persona/:id por put
app.put("/persona/:id", jsonParser, function(request, response, next) {

    if (!request.params)
        return response.sendStatus(400)

    var data = persona.saveComment(request.body.comment);

    // Pintamos la respuesta
    response.end(JSON.stringify(data));

})

// Routing para las peticiones a /persona/:title por delete
app.delete("/persona/:id", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    //console.log(request.body);

    //TODO FALTA DESARROLLAR
    var data = persona.deletePerson(request.params.id);

    //Respuesta
    response.end(JSON.stringify(data));

})

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);