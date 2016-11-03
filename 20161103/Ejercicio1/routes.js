var PersonModel = require('./models').PersonModel;
var CommentModel = require('./models').CommentModel;

var appRouter = (app) => {

    app.get("/person", (request, response, next) => {

        PersonModel.getAll((error, result) => {
            if (error) {
                return response.status(400).send(error);
            }

            response.send(result);
        });

    })

    // Routing para las peticiones a /person por post
    app.post("/person", (request, response, next) => {

        PersonModel.save(request.body, (error, result) => {
            if(error) {
                return response.status(403).send(error);
            }

            response.send(result);
        });

    })

    // Routing para las peticiones a /person/:id por get
    app.get("/person/:id", (request, response, next) => {
        
        PersonModel.getByid(request.params, (error, result) => {
            if (error) {
                return response.status(403).send(error);
            }

            response.send(result);
        });

    })

    // Routing para las peticiones a /comment/ por post
    app.post("/comment", (request, response, next) => {

        CommentModel.create(request.body, (error, comment) => {
            if(error) {
                return response.status(403).send(error);
            }

            PersonModel.getByid(request.body, (err, person) => {
                if(err) {
                    return response.status(403).send(err);
                }

                if(!person.comments)
                {
                    person.comments = [];
                }

                person.comments.push(comment.id);
                person.id = request.body.id;
                console.log(person);
                PersonModel.save(person, (error, result) => {
                    if(error) {
                        return response.status(403).send(error);
                    }

                    response.send(person);

                });

            });

        });

    })

};

module.exports = appRouter;