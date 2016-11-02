var PersonModel = require('./models').PersonModel;

var appRouter = (app) => {

    app.get("/person", (request, response, next) => {

        PersonModel.getAll((error, result) => {
            if (error) {
                return response.status(400).send(error);
            }

            response.send(result);
        });

        /*response.json([
            {nombre: 'jorge', apellido: 'lopez'},
            {nombre: 'alfredo', apellido: 'vargas'},
            {nombre: 'pepe', apellido: 'antonio'},
            {nombre: 'superNombre', apellido: 'superApellido'}
        ]);*/

    })

    // Routing para las peticiones a /person por post
    app.post("/person", (request, response, next) => {
        
        

    })

    // Routing para las peticiones a /person/:id por get
    app.get("/person/:id", (request, response, next) => {
        
        

    })

    // Routing para las peticiones a /comment/ por post
    app.post("/comment", (request, response, next) => {



    })

};

module.exports = appRouter;
