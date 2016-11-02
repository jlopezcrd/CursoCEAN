const fs = require('fs');
const _  = require('lodash');

var getAll = (() => {

    return [
        {
            firstname: 'Jorge',
            lastname: 'LC'
        },
        {
            firstname: 'Luis',
            lastname: 'Perez'
        }
    ];

});

var getById = ((id) => {

    var personas = {id: 1, firstname: 'Jorge', lastname: 'LC'};
    return personas;

});

var savePerson = ((person) => {

    return person;

});

var saveComment = ((comment) => {

    return comment;

});

var deletePerson = ((id) => {

    return id;

});

module.exports = {
    getAll,
    getById,
    savePerson,
    saveComment,
    deletePerson
}