// Instanciamos los modulos
const _       = require('lodash');
//const fs      = require('fs');
const yargs   = require('yargs');
const notes   = require('./notes');

// Obsoleto Recogemos el parametro por consola en segunda posicion
//var command = process.argv[2];

// Nuevo metodo para recoger los parametros
var argv = yargs.argv;

//Visualizar el comando pasado
//console.log(argv.command);

//Evaluamos el comando y ejecutamos la funcion adecuada
//argv._[0] = comando introducido
switch(argv._[0]) {

    case "add":

        // Requerimos los parametros necesarios
        yargs.usage('Usage: node $0  --title=[title] --body=[body]')
        .demand(['title', 'body'])
        .argv;
        argv = yargs.argv;

        var note = notes.addNote(argv.title, argv.body);
        console.log(note);
        break;

    case "read": 

        // Requerimos los parametros necesarios
        yargs.usage('Usage: node $0  --title=[title]')
        .demand(['title'])
        .argv;
        argv = yargs.argv;

        notes.getNote(argv.title);
        break;

    case "list": 

        notes.getAll();
        break;

    case "remove": 

        // Requerimos los parametros necesarios
        yargs.usage('Usage: node $0  --title=[title]')
        .demand(['title'])
        .argv;
        argv = yargs.argv;

        notes.removeNote(argv.title);
        break;

    default :
        console.log("Error en el comando");
        break;
}