const bparser      = require('body-parser');
const config       = require('./config');
var peliculasModel = require('./models').PeliculasModel;

// Creamos el parseador de json
var jsonParser = bparser.json()

// Creamos el parserador de formularios
var urlencodedParser = bparser.urlencoded({ extended: false })

function responseMsg(code, data=null) {
    return {
        'code': code,
        'text': config.errors[code],
        'data': data
    }
}

var appRouter = (app) => {

    app.get("/pelicula", (request, response, next) => {

        peliculasModel.getAll((error, result) => {
            if (error) {
                return response.status(error.code).send(error);
            }

            response.status(result.code).send(result);
        });

    })

    app.post("/pelicula", urlencodedParser, (request, response, next) => {

        if (!request.body.titulo)
            return response.status(400).send(responseMsg(400));

        peliculasModel.save(request.body, (error, result) => {
            if(error) {
                return response.status(error.code).send(error);
            }

            response.status(result.code).send(result);
        });

    })

    app.get("/pelicula/:id", (request, response, next) => {

        peliculasModel.getById(request.params, (error, result) => {
            if (error) {
                return response.status(error.code).send(error);
            }

            response.status(result.code).send(result);
        });

    })

    app.put("/pelicula", jsonParser, function(request, response, next) {

        if (!request.body.titulo)
            return response.status(400).send(responseMsg(400));

        peliculasModel.save(request.body, (error, result) => {
            if(error) {
                return response.status(error.code).send(error);
            }

            response.status(result.code).send(result);
        });

    })

};

module.exports = appRouter;
