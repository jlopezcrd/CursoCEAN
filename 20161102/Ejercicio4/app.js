// Instanciamos los modulos
const _         = require('lodash');
const HTTP      = require('http');
const express   = require('express');
const morgan    = require('morgan');
const bparser   = require('body-parser');
const couchbase = require('couchbase');

// Configuramos el puerto en el que quermos escuchar
const PORT      = 80;
const HOSTNAME  = "localhost";

// Creamos el cluster de couchbase
var cluster           = new couchbase.Cluster("couchbase://localhost");
var bucket            = cluster.openBucket("example");
module.exports.bucket = bucket;

// Instanaciamos el middleware express
// Parametros de peticion, respuesta, y siguiente pila en caso necesario
var app = express();

// Usamos el modulo morgan para loguear las peticiones por consola
app.use(morgan('combined'));

// Parseadores de peticiones
app.use(bparser.json());
app.use(bparser.urlencoded({ extended: false}));

var routes = require('./routes')(app);

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);