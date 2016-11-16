var uuid   = require('uuid');
var n1ql   = require('couchbase').N1qlQuery;
var bucket = require('./app').bucket;

function PeliculasModel() {}

function response(code, text, data=null) {
    return {
        'code': code,
        'text': text,
        'data': data
    }
}

PeliculasModel.getAll = (callback) => {
    
    var statement = `SELECT META(pelicula).id, pelicula.titulo, 
    pelicula.director, pelicula.duracion 
    FROM \`${bucket._name}\` AS pelicula
    WHERE pelicula.type = 'pelicula'`;

    var query = n1ql.fromString(statement);
    bucket.query(query, (error, result) => {
        if (error)
        {
            console.log(error);
            return callback(response(400, 'Bad request!!'), null);
        }
        
        if (result.length > 0)
            callback(null, response(200, 'Success', result));
        else
            callback(response(404, 'No Data!'), null);
    });

}

PeliculasModel.save = (data, callback) => {

    var pelicula = {
        titulo    : data.titulo,
        director  : data.director,
        duracion  : data.duracion,
        type      : 'pelicula',
        timestamp : (new Date())
    };

    var id = data.id ? data.id : uuid.v4();
    bucket.upsert(id, pelicula, (error, result) => {
        if (error) {
            console.log(error);
            return callback(response(400, 'Bad request!!'), null);
        }

        callback(null, response(200, 'Success', result));

    });

}

PeliculasModel.getById = (data, callback) => {

    console.log(data.id);
    bucket.get(data.id, (error, result) => {
        if(error) {
            console.log(error);
            return callback(response(400, 'Bad request!!'), null);
        }

        if (result)
        {
            result.value.id = data.id;
            console.log(result);
            
            callback(null, response(200, 'Success', result));
        }
        else
            callback(response(404, 'No Data!'), null);
    });

}

module.exports.PeliculasModel = PeliculasModel;