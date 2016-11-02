var uuid   = require('uuid');
var n1ql   = require('couchbase').N1qlQuery;
var bucket = require('./app').bucket;

function PersonModel() {}

PersonModel.getAll = (callback) => {
    var statement = `SELECT META(person).id, person.name, person.email 
    (SELECT timestamp, message FROM \`${bucket._name}\`
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

PersonModel.save = (data, callback) => {

}

module.exports.PersonModel = PersonModel;