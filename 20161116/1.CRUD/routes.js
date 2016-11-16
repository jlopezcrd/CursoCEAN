var peliculasModel = require('./models').PeliculasModel;

var appRouter = (app) => {

    app.get("/pelicula", (request, response, next) => {

        peliculasModel.getAll((error, result) => {
            if (error) {
                return response.status(error.code).send(error);
            }

            response.send(result);
        });

    })

    app.post("/pelicula", (request, response, next) => {

        peliculasModel.save(request.body, (error, result) => {
            if(error) {
                return response.status(error.code).send(error);
            }

            response.send(result);
        });

    })

    app.get("/pelicula/:id", (request, response, next) => {
        
        peliculasModel.getById(request.params, (error, result) => {
            if (error) {
                return response.status(error.code).send(error);
            }

            response.send(result);
        });

    })

};

module.exports = appRouter;
