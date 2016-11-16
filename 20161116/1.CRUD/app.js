// Instanciamos los modulos
const _         = require('lodash');
const HTTP      = require('http');
const express   = require('express');
const morgan    = require('morgan');
const bparser   = require('body-parser');
const couchbase = require('couchbase');
const config    = require('./config');

// Configuramos el puerto en el que quermos escuchar
const PORT      = `${config.express.PORT}`
const HOSTNAME  = `${config.express.HOST}`

// Creamos el cluster de couchbase
var cluster           = new couchbase.Cluster(`${config.db.TYPE}//${config.db.HOST}`);
var bucket            = cluster.openBucket(`${config.db.BUCKET}`);
module.exports.bucket = bucket;

// Instanaciamos el middleware express
// Parametros de peticion, respuesta, y siguiente pila en caso necesario
var app = express();

// Usamos el modulo morgan para loguear las peticiones por consola
app.use(morgan('combined'));

// Parseadores de peticiones
app.use(bparser.json());
app.use(bparser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

var routes = require('./routes')(app);

// Crear el servidor y escuchar en el puerto
HTTP.createServer(app).listen(PORT, HOSTNAME);