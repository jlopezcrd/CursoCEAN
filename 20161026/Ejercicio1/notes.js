const fs = require('fs');
const _  = require('lodash');

// Funcion para leer el fichero
var fetchNotes = () => {

    // Metodo mejorado
    try {
        // Leer el fichero y cargarlo al array
        var notesFile = fs.readFileSync('notes-data.json');
        // Añadimos los datos del fichero al array
        var notes = JSON.parse(notesFile);
        return notes;
    }catch(error) {
        return []
    }

    // Comprobar que el fichero existe
    /*if(fs.existsSync('notes-data.json')) {

        // Leer el fichero y cargarlo al array
        var notesFile = fs.readFileSync('notes-data.json');
        // Añadimos los datos del fichero al array
        var notes = JSON.parse(notesFile);
        return notes;

    } else {
        return [];
    }*/

}

// Añadir los datos al fichero
var saveNotes = (notes) => {
    // Si es la primera vez, creamos el fichero
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// Notacion arrow añadir una nota
var addNote = (title, body) => {
    //console.log(`\nTitulo: ${title} \nBody: ${body}`)
    var notes = fetchNotes();
    var note  = {
        title,
        body
    }

    try {

        // Buscamos en el array la nueva nota a añadir
        // programacion funcional
        /*var duplicateNotes = notes.filter(function(){
            return note.title === title
        })*/

        // Programacion arrow
        var duplicateNotes = notes.filter((note) => 
            note.title === title
        )

        // Si el tamaño de la busqueda es 0 o no encontrado
        // lo añadimos al array y guardamos el fichero con
        // todos los datos del array
        if(duplicateNotes.length === 0) {
            // Añadir la nota al array
            notes.push(note);
            // Guardar el fichero con el array
            saveNotes(notes);
        }

        console.log(note);
        // Retornamos al programa principal la note
        return note;

    } catch(error) {
        console.log('Error en la operacion'+error);
    }
}

// Notacion arrow visualizar todas las notas
var getAll = () => {
    //console.log("Obtener todas las notas");
    return fetchNotes();
}

// Notacion arrow visualizar una nota
var getNote = (title) => {
    console.log(`Visualizando la nota: ${title}`);
    // Recogemos todas las notas
    var notes = fetchNotes();

    // Utilizando lodash y arrow eliminamos los
    // elementos que coincidan con el title
    var filteredNotes = _.remove(notes, (note) => {
        return note.title === title
    });

    return filteredNotes;
}

// Notacion arrow eliminar una nota
var removeNote = (title) => {
    
    //console.log(`Eliminando la nota: ${title}`);    

    // Recogemos todas las notas
    var notes = fetchNotes();

    // Utilizando lodash y arrow eliminamos los
    // elementos que coincidan con el title
    var filteredNotes = _.remove(notes, (note) => {
        return note.title === title
    });

    // Guardmos el fichero
    saveNotes(notes);

    // Otro metodo con filter
    // var filteredNotes = notes.filter((note) => note.title !==  title);
    // saveNotes(filteredNotes);
    
    //console.log(notes);
    //console.log(filteredNotes);

    // Si el tamaño de las filteredNotes > 0
    // Hemos eliminado la nota
    // Si no, no se ha encontrado
    if(filteredNotes.length > 0)
        return {'title': '', 'body': ''}
    else
        return filteredNotes;

}

// Si ponemos solo la key a la hora de exportar
// exporta la funcion privada a la publica
// no hace falta igualar addNote: addNote
// notacion estándar
/*module.exports = {
    addNote
}*/

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}