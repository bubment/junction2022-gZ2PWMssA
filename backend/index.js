const express = require('express')
const cors = require('cors');
require('dotenv').config();

const PORT = 3000

const app = express()


app.use(cors());

app.get('/about-info', function (req, res) {
    res.status(200).json({
        name:'Attila'
    })
})

app.get('/google-maps-api-key', function (req, res) {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    res.status(200).send(API_KEY);
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
