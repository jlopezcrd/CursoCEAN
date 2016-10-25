// Instanciamos el modulo
const HTTP = require('http');

// Configuramos el puerto en el que quermos escuchar
const PORT = 80;
const HOSTNAME = "localhost";

// Instanciar json de usuarios
var usuarios = require('./usuarios.json');

// Crear el servidor y procesar peticiones
var server = HTTP.createServer(function(request, response) {
    
    // Procesar URL y pintar mensaje en consola
    if(request.url == '/consola')
        console.log('Saludo por consola');

    // Procesar peticion y saludar por pantalla
    if(request.url == '/')
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1><center>HOLA</center></h1>');
    }

    // Procesar peticion y devolver json por pantalla
    if(request.url == '/users')
    {
        response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        response.end(JSON.stringify(usuarios));
    }

});

// Poner a escuchar el servidor
server.listen(PORT, HOSTNAME, function(){
    console.log('Servidor escuchando en http://localhost:' + PORT);
});