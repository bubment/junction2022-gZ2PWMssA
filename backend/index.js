const express = require('express')
const cors = require('cors');
require('dotenv').config();
const { getProductsByCategory, getCategories } = require('./services/productService')
const { calculateRecommendations } = require('./services/shopService')

const PORT = 3000

const app = express()


app.use(cors());
app.use(express.json())

app.use(express.static('../frontend/dist'))

app.get('/about-info', function (req, res) {
    res.status(200).json({
        name:'Attila'
    })
})

app.get('/google-maps-api-key', function (req, res) {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    res.status(200).send(API_KEY);
})

app.get('/categories', function (req,res) {
    const result = getCategories();
    res.status(200).send(result);
})

app.get('/products/:category', function (req,res) {
    const result = getProductsByCategory(req.params.category)
    res.status(200).send(result)
})

app.post('/recommendations', (req, res) => {
    const result = calculateRecommendations(req.body)
    res.status(200).send(result)
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
