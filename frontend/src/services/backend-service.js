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
    getCategories: async function () {
        return axios.get(`${URL}/categories`)
    },
    getProductsByCategory: async function (category) {
        return axios.get(`${URL}/products/${category}`)
    },
    postRecommendations: async function (cartContent) {
        return axios.post(`${URL}/recommendations`, cartContent)
    },
    composeCategoryImgUrl: function (category) {
        return `${URL}/${category.iconUrl}`;
    }
}
