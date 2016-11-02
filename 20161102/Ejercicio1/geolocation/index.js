const request = require('request');

var getByAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    console.log(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error) {

            callback({'msg': "No se puede conectar con GOOGLE APIS"});

        } else if(body.status === 'ZERO_RESULTS') {

            callback({'msg': "No puedo encontrar la direccion"});

        } else if(body.status === 'OK') {

            response = {
                'lat': body.results[0].geometry.location.lat,
                'lng': body.results[0].geometry.location.lng
            }
            callback(null, response);

        }
    })
}

module.exports.getByAddress = getByAddress;