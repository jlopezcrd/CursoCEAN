var peliculasModel = require('./models').PeliculasModel;

var appRouter = (app) => {

    app.get("/pelicula", (request, response, next) => {

        peliculasModel.getAll((error, result) => {
            if (error) {
                return response.status(400).send(error);
            }

            response.send(result);
        });

    })

    app.post("/pelicula", (request, response, next) => {
        

    })

    app.get("/pelicula/:id", (request, response, next) => {
        

    })

};

module.exports = appRouter;
