const express = require('express')
const cors = require('cors');

const PORT = 3000

const app = express()


app.use(cors());

app.get('/about-info', function (req, res) {
    res.status(200).json({
        name:'Attila'
    })
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
