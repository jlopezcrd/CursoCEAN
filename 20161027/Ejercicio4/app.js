// Ejemplo de promises
/*var promise = new Promise(function(resolve, reject) {
    //resolve("Todo ok");
    reject("Algo no ha funcionado");
});

promise.then(function(message) {
    console.log(message);
}, function(error) {
    console.log(error);
})*/

// Funcion suma
var asynAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject("Los argumentos son incorrectos");
        }
    })
}

// Ejecucion correcta
asynAdd(2,6).then((res) => {
    console.log(`El resultado es: ${res}`);
    return asynAdd(res, 10);
}).then((res) => {
    console.log(`El resultado es: ${res}`);
    asynAdd(res, 10);
}).catch((res) => {
    console.log('Ocurrio un error');
});

// Ejecucion erronea
asynAdd(2,'6').then((res) => {
    console.log(`El resultado es: ${res}`);
    return asynAdd(res, 10);
}).then((res) => {
    console.log(`El resultado es: ${res}`);
    asynAdd(res, 10);
}).catch((res) => {
    console.log('Ocurrio un error');
});