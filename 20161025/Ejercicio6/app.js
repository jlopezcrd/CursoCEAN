// Instanciamos los modulos
const HTTP = require('http');
var express = require('express');
var morgan = require('morgan');
var bparser = require('body-parser');

// Configuramos el puerto en el que quermos escuchar
const PORT = 80;
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
        'Content-Type': 'text/plain', 
        'Access-Control-Allow-Origin': '*'
    });

    next();
})

// Routing para las peticiones a raiz
app.get("/", function(request, response, next) {
    response.end("Bienvenido a la home");
})

// Routing para las peticiones a /about
app.get("/about", function(request, response, next) {
    response.end("Bienvenido a la al about");
})

// Routing para las peticiones a /login por post
app.post('/login', urlencodedParser, function (request, response) {
  
    if (!request.body)
        return response.sendStatus(400)
    
    console.log(request.body);

    // Pintamos lo que nos envia
    response.end(request.body.username +" - "+ request.body.password);

})

// Routing para las peticiones a /person por post
app.post("/person", jsonParser, function(request, response, next) {
    
    if (!request.body)
        return response.sendStatus(400)

    console.log(request.body);

    // Pintamos lo que nos envia
    response.end(request.body.name +" - "+ request.body.lastname);

})

// Routing para las peticiones a /person/:idPerson por put
app.put("/person/:idPerson", jsonParser, function(request, response, next) {

    if (!request.params)
        return response.sendStatus(400)

    console.log(request.params);

    // Pintamos lo que nos envia
    response.end("El usuario: " + request.params.idPerson + " se ha modificado correctamente");

})

// Routing para todas las demás peticiones
app.get("*", function(request, response, next) {
    response.end("Recurso inexistente");
})

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);