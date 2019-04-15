const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then((result) => {

        clima.getClima(result.latitud, result.longitud)
            .then((resultClima) => {
                //console.log(`El clima actual de ${argv.direccion} es: ${resultClima}`)
                console.log(`El clima actual de ${result.direccion} es: ${resultClima}`)
            })
            .catch((err) => {
                console.log(err);
            })

        //console.log(result);
    }).catch((err) => {
        console.log(err);
    })