
/* GeoNames API seemingly not necessary for project
let geonames_ID = ''
geonames_ID = projectData.geonames_ID
fetch('http://api.geonames.org/postalCodeSearchJSON?postalcode=10023&country=US&username=hedelman4')
    .then(res=>res.json())
    .then(geoData=>{
        console.log(geoData)
    })
*/

projectData = {}
let weatherbit_Key = '1480091bdd174b2d985790709b87201b'
let pixabay_Key = '41352822-6ee0ea802d31538dd01476bfa'
let cityName = ''
let imageURL = ''
let weatherForecast = ''

function fetchAll() {
    fetch('/all')
        .then(res=>res.json())
        .then(projectData=>{
            weatherbit_Key = projectData.weatherbit_Key
            pixabay_Key = projectData.pixabay_Key
        }) 
}

async function getWeatherData(cityName) {
    await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+cityName+'&units=I&key='+weatherbit_Key)
        .then(res=>res.json())
        .then(weatherData=>{
            weatherForecast = weatherData['data'][document.getElementById('inputDate').selectedIndex - 1]
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

export{fetchAll}
export{getWeatherData}
export{getImageData}
export{performAction}