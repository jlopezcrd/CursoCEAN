const yargs   = require('yargs');
const axios   = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {

    if(response.data.status === 'ZERO_RESULTS')
    {
        throw new Error("No se ha encontrado esta direccion");
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.forecast.io/forecast/${APIKEY}/${lat},${lng}?si=ui`;
    return axios.get(weatherUrl);

}).then((response) => {

    var temperature = response.data.currently.temperature;
    console.log(`La temperature es: ${temperature} centigrados`);

}).catch((e) => {

    if(e.code === 'ENOTFOUND')
    {
        console.log("El servidor del servicio no se encuentra disponible");
    } else
    {
        console.log(e);
    }

});


/*geo.getByAddress(argv.address, (error, resp) => {

    wt.getWeather(resp, (error, response) => {
        console.log(response.weather);
    });

});*/