var uuid   = require('uuid');
var n1ql   = require('couchbase').N1qlQuery;
var bucket = require('./app').bucket;

function PersonModel() {}
function CommentModel() {}

PersonModel.getAll = (callback) => {
    var statement = `SELECT META(person).id, person.name, person.email, 
    person.type, person.timestamp,
    (SELECT timestamp, msg FROM \`${bucket._name}\`
    USE KEYS person.comments) AS comments
    FROM \`${bucket._name}\` AS person
    WHERE person.type = 'person'`;

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

PersonModel.getByid = (data, callback) => {
    console.log(data.id);
    bucket.get(data.id, (error, result) => {
        if(error) {
            console.log(error);
            return callback(error, null);
        }
        result.value.id = data.id;
        callback(null, result.value);
    });
}

PersonModel.save = (data, callback) => {
    var person = {
        name: {
            first: data.name.first,
            last:  data.name.last
        },
        email: data.email,
        comments: data.comments,
        type: 'person',
        timestamp: (new Date())
    };

    var id = data.id  ? data.id : uuid.v4();
    bucket.upsert(id, person, (error, result) => {
        if(error) {
            console.log(error);
            return callback(error, null);
        }

        callback(null, result);
    });
}

CommentModel.create = (data, callback) => {
    var comment = {
        msg: data.msg,
        type: 'comment',
        timestamp: new Date()
    }

    var id = uuid.v4();

    bucket.insert(id, comment, (error, result) => {
        if(error) {
            console.log(error);
            return callback(error, null);
        }
        comment.id = id;
        callback(null, comment);
    });
}

module.exports = {PersonModel, CommentModel};
