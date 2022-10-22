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
    getProductsRaw: async function() {
        return axios.get(`${URL}/products-raw`)
    },
    getProductsByCategory: async function (category) {
        return axios.get(`${URL}/products/${category}`)
    },
    postRecommendations: async function (cartContent) {
        return axios.post(`${URL}/recommendations`, cartContent)
    },
    getUserPosition: async function () {
        return axios.get(`${URL}/my-position`)
    },
    composeCategoryImgUrl: function (category) {
        return `${URL}/${category.iconUrl}`;
    },
    composeImgUrl: function (relativePath) {
        return `${URL}/${relativePath}`;
    }
}
