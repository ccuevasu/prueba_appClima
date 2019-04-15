const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir) // nombre de la direccion en formato legible para el navegador

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'eb26b5d1cfmshd59757ec7f84083p12476cjsna394def2a727' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];

    return {
        direccion: data.name,
        latitud: data.lat,
        longitud: data.lon
    };
}


module.exports = {
    getLugarLatLng
}