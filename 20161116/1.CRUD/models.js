var uuid   = require('uuid');
var n1ql   = require('couchbase').N1qlQuery;
var bucket = require('./app').bucket;

function PeliculasModel() {}

PeliculasModel.getAll = (callback) => {
    var statement = `SELECT META(pelicula).id, pelicula.name, pelicula.email 
    (SELECT timestamp, message FROM \`${bucket._name}\`
    USE KEYS pelicula.comments) AS comments
    FROM \`${bucket._name}\` AS pelicula
    WHERE pelicula.type = 'pelicula'`;

    var query = n1ql.fromString(statement);
    bucket.query(query, (error, result) => {
        if (error)
        {
            console.log(error);
            return callback(error, null);
        }
        callback(null, result);
    });
}

PeliculasModel.save = (data, callback) => {

}

module.exports.PeliculasModel = PeliculasModel;