import './styles/styles.scss'
projectData = {}
let weatherbit_Key = '1480091bdd174b2d985790709b87201b'
let pixabay_Key = '41352822-6ee0ea802d31538dd01476bfa'
let cityName = ''
let imageURL = ''
let weatherForecast = ''
let weatherDataLength = 16
const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let currentDate = month+'-'+day+'-'+year

function fetchAll() {
    fetch('/all')
        .then(res=>res.json())
        .then(projectData=>{
            weatherbit_Key = projectData.weatherbit_Key
            pixabay_Key = projectData.pixabay_Key
        }) 
}

fetchAll

async function getWeatherData(cityName) {
    await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+cityName+'&units=I&key='+weatherbit_Key)
        .then(res=>res.json())
        .then(weatherData=>{
            weatherForecast = weatherData['data'][document.getElementById('inputDate').selectedIndex - 1]
            console.log(weatherForecast)
        })
        document.getElementById('forecast').innerHTML = 'Temperature: '+weatherForecast['temp']+'<br>'+weatherForecast['weather']['description'];
}

async function getImageData(cityName) {
    await fetch('https://pixabay.com/api/?key='+pixabay_Key+'&q='+cityName+'&image_type=photo')
        .then(res=>res.json())
        .then(imageData=>{
            imageURL = imageData['hits'][0]['largeImageURL']
        })
        document.getElementById('image').style.backgroundImage = "url('"+imageURL+"')"
}

async function performAction() {
    cityName = document.getElementById('inputName').value
    travDate = document.getElementById('inputDate').value
    getWeatherData(cityName)
    getImageData(cityName)
    document.getElementById('placeholder').innerHTML = 'The weather forecast in '+cityName+' on '+travDate+' will be:'
}

document.getElementById('submit').addEventListener('click', performAction)

for (let i = 0; i < weatherDataLength; i++) {
    let date = new Date()
    date.setDate(date.getDate()+i)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let currentDate = month+'-'+day+'-'+year
    var option = document.createElement('option')
    option.text = currentDate
    document.getElementById('inputDate').add(option)
}
