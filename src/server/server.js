require('dotenv').config()
const geonames_ID = process.env.geonames_ID
const geonames_PWD = process.env.geonames_PWD
const weatherbit_Key = process.env.weatherbit_Key
const pixabay_Key = process.env.pixabay_Key
projectData = {}
projectData['geonames_ID'] = geonames_ID
projectData['geonames_PWD'] = geonames_PWD
projectData['weatherbit_Key'] = weatherbit_Key
projectData['pixabay_Key'] = pixabay_Key

var path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors());
app.use(express.static('src/client'))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
    //res.sendFile('dist/index.html')
})

app.get('/all', function (req, res) {
    console.log(projectData)
    res.send(projectData)
})