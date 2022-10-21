import axios from "axios";

const HOST = 'http://localhost:'
const PORT = '3000'

export default {
    getAbout: async function () {
        return axios.get(`${HOST}${PORT}/about-info`)
    },
    getGoogleMapsApiKey: async function () {
        return axios.get(`${HOST}${PORT}/google-maps-api-key`)
    },
}
