// Requerimos todos los modulos necesarios
var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server);

// Escuchamos en el puerto por defecto y si falla asigno otro
server.listen(process.env.PORT || 2300);

// GET a raiz enviamos el fichero de socket.html
app.get('/', function(request, response) {
    //TODO: enviar fichero
    response.sendFile(__dirname + '/socket.html');
});

// Inciamos el socket = (title) => {
io.sockets.on('connection', function(socket) {
    console.log('Socket conectado...');

    socket.on('send:message', function(data) {
        console.log(data);
        io.sockets.emit('send:message', {msg:data});
    });

});