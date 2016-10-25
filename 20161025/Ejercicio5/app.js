// Instanciamos los modulos
const HTTP = require('http');
var express = require('express');

// Configuramos el puerto en el que quermos escuchar
const PORT = 80;
const HOSTNAME = "localhost";

// Instanaciamos el middleware express
// Parametros de peticion, respuesta, y siguiente pila en caso necesario
var app = express();

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

// Routing para todas las demás peticiones
app.get("*", function(request, response, next) {
    response.end("Recurso inexistente");
})

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);