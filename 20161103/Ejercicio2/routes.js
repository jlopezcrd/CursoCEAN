var PersonModel = require('./models').PersonModel;
var CommentModel = require('./models').CommentModel;

var appRouter = (app) => {

    app.get("/person", (request, response) => {

        PersonModel.find({},{load:["comments"]},(error, people) => {
            if(error)
            {
                return response.status(400).send(error);
            }
            response.send(people);
        });
        
    })

    // Routing para las peticiones a /person por post
    app.post("/person", (request, response) => {

        var person = new PersonModel({
            name: {
                first: request.body.name.first,
                last: request.body.name.last
            },
            email: request.body.email,
        });

        person.save((error, result) => {
            if(error)
            {
                return response.status(400).send(error);
            }
            response.send(person);
        });

    })

    // Routing para las peticiones a /person/:id por get
    app.get("/person/:id", (request, response) => {
        
        PersonModel.getById(request.params.id, {load:["comments"]}, (error, person) => {
            if(error)
            {
                return response.status(400).send(error);
            }
            response.send(person);
        });

    })

    // Routing para las peticiones a /comment/ por post
    app.post("/comment", (request, response) => {

        var comment = new CommentModel({
            message: request.body.message
        });

        comment.save((error, result) => {
            
            if(error)
            {
                return response.status(400).send(error);
            }

            PersonModel.getById(request.body.id, (error, person) => {
                if(error)
                {
                    return response.status(400).send(error);
                }
                person.comments.push(comment);
                person.save(() => {
                    if(error)
                    {
                        return response.status(400).send(error);
                    }

                    response.send(person);
                });

            });

        });

    })

};

module.exports = appRouter;