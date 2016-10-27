// Requerimos todos los modulos necesarios
var cluster = require('cluster');

if(cluster.isMaster) {

    var numWorkers = require('os').cpus().length;

    // Creacion subprocesos
    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log(`Worker online ${worker.process.pid}`);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log(`Worker die ${worker.process.pid}`);
        cluster.fork();
    });

} else { 
    // Requerimos todos los modulos necesarios
    var express = require('express'),
        app     = express(),
        server  = require('http').createServer(app),
        io      = require('socket.io').listen(server);

    // Escuchamos en el puerto por defecto y si falla asigno otro
    server.listen(process.env.PORT || 2300, function(){
        console.log(`Process: ` + process.pid);
    });

    var usernames = [];

    // GET a raiz enviamos el fichero de socket.html
    app.get('/', function(request, response) {
        //TODO: enviar fichero
        response.sendFile(__dirname + '/socket.html');
    });

    // Inciamos el socket = (title) => {
    io.sockets.on('connection', function(socket) {
        
        //console.log('Socket conectado...');
        socket.emit('send:message', {msg:'Conectando con socket..'});

        socket.on('new:user', function(data, callback){
            if (usernames.indexOf(data) != -1) {
                callback(false);
            } else {
                console.log(data);
                usernames.push(data);
                updateUsernames();
                callback(true);
            }
        }) ;

        socket.on('send:message', function(data) {
            console.log(`Process: ` + process.pid);
            console.log(data);
            io.sockets.emit('send:message', {msg:data});
        });

        socket.emit('send:message', {msg:'hola'});

    });

    function updateUsernames() {
        console.log(usernames);
        io.sockets.emit('usernames', {msg:usernames});
    }

}