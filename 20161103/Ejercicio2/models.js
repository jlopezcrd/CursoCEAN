var ottoman    = require('ottoman');
ottoman.bucket = require('./app').bucket;

var PersonModel = ottoman.model("Person", {
    timestamp: {
        type: "Date",
        default: () => {return new Date();}
    },
    name: {
        first: "string",
        last: "string"
    },
    email: "string",
    comments: [
        {
            ref: "Comment"
        }
    ]
});

var CommentModel = ottoman.model("Comment", {
    timestamp: {
        type: "Date",
        default: () => {return new Date();}
    },
    message: "string"
});

module.exports = {PersonModel, CommentModel}