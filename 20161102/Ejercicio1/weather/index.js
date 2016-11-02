const request = require('request');

var getWeather = (location, callback) => {

    request({
        url: `https://api.forecast.io/forecast/APIKEY/${location.lat},${location.lng}`,
        json: true
    }, (error, response, body) => {

        if(error) {

            callback({msg: "No se puede conectar con Forecast.io"});

        } else if(response.statusCode === 400) {

            callback({msg: "No puedo encontrar el tiempo"});

        } else if(response.statusCode === 200) {

            callback(null, {'weather': body.currently.temperature});

        }
    })
}

module.exports.getWeather = getWeather;