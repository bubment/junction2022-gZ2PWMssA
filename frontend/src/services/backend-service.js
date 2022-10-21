import axios from "axios";

const HOST = 'http://localhost:'
const PORT = '3000'
let URL = `${HOST}${PORT}`

if (import.meta.env.PROD) {
    URL = eval("window.location.origin")
}

export default {
    getAbout: async function () {
        return axios.get(`${URL}/about-info`)
    },
    getGoogleMapsApiKey: async function () {
        return axios.get(`${URL}/google-maps-api-key`)
    },
}
