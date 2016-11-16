var uuid     = require('uuid');
var n1ql     = require('couchbase').N1qlQuery;
var bucket   = require('./app').bucket;
const config = require('./config');

function PeliculasModel() {}

function responseMsg(code, data=null) {
    return {
        'code': code,
        'text': config.errors[code],
        'data': data
    }
}

PeliculasModel.getAll = (callback) => {
    
    var statement = `SELECT META(pelicula).id, pelicula.titulo, 
    pelicula.director, pelicula.duracion, pelicula.type, pelicula.timestamp
    FROM \`${bucket._name}\` AS pelicula
    WHERE pelicula.type = 'pelicula'`;

    var query = n1ql.fromString(statement);
    bucket.query(query, (error, result) => {
        if (error)
        {
            console.log(error);
            return callback(responseMsg(400), null);
        }
        
        console.log(result);

        if (result.length > 0)
            callback(null, responseMsg(200, result));
        else
            callback(responseMsg(404), null);
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
            return callback(responseMsg(400), null);
        }

        if (result)
        {
            pelicula.id  = id;
            pelicula.cas = result.cas;
            console.log(result);

            callback(null, responseMsg(201, pelicula));
        }
        else
            return callback(responseMsg(400), null);

    });

}

PeliculasModel.getById = (data, callback) => {

    console.log(data.id);
    bucket.get(data.id, (error, resultO) => {
        if(error) {
            console.log(error);
            return callback(responseMsg(400), null);
        }

        if (resultO)
        {
            //result.value.id = data.id;
            result = resultO.value;
            result.id = data.id;
            result.cas = resultO.cas;

            console.log(result);
            
            callback(null, responseMsg(200, result));
        }
        else
            callback(responseMsg(404), null);
    });

}

module.exports.PeliculasModel = PeliculasModel;