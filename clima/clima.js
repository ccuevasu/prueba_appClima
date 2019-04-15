const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6682dbd24de315faa07a192b1ccf41de&units=metric`)

    return resp.data.main.temp;


}






module.exports = {
    getClima
}