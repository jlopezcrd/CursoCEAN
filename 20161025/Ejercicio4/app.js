// Instanciamos los modulos
const HTTP = require('http');
var express = require('express');

// Configuramos el puerto en el que quermos escuchar
const PORT = 80;
const HOSTNAME = "localhost";

// Instanciar json de usuarios
var usuarios = require('./usuarios.json');

// Instanaciamos el middleware express
// Parametros de peticion, respuesta, y siguiente pila en caso necesario
var app = express();

app.use(function(request, response, next) {

    // Hacemos chequeo de la rutas y solo permitimos /users
    // Si no terminamos la conexion y mostramos un 404
    if(request.url === "/users")
    {
        // Escribimos log por pantalla
        console.log("Primera accion del middleware");

        next();

    } else 
    {
        // Escribimos log por pantalla
        console.log("Primera accion del middleware");

        response.writeHead(404, {
            'Content-Type': 'text/plain', 
            'Access-Control-Allow-Origin': '*'
        });
        response.end('Acceso denegado');
    }

})

app.use(function(request, response) {

    // Respondemos en todas las peticiones con estas cabeceras
    response.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });

    // Pintamos el json de usuarios
    response.end(JSON.stringify(usuarios));

    // Escribimos log por pantalla
    console.log("Segunda accion del middleware");

})

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);