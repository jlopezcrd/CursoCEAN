const yargs   = require('yargs');
var geo       = require('./geolocation');
var wt        = require('./weather');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias : 'address',
            description: 'Direccion de la cual obtener temperatura',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geo.getByAddress(argv.address, (error, resp) => {

    wt.getWeather(resp, (error, response) => {
        console.log(response.weather);
    });

});