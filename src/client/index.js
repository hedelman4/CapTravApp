//import './styles/styles.scss'

async function getWeatherData(cityName,weatherbit_Key) {
    await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+cityName+'&units=I&key='+weatherbit_Key)
        .then(res=>res.json())
        .then(weatherData=>{
            weatherForecast = weatherData['data'][document.getElementById('inputDate').selectedIndex - 1]
        })
        document.getElementById('forecast').innerHTML = 'Temperature: '+weatherForecast['temp']+'<br>'+weatherForecast['weather']['description'];
}

async function getImageData(cityName,pixabay_Key) {
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
    await fetch('/all')
        .then(res=>res.json())
        .then(projectData=>{
            weatherbit_Key = projectData.weatherbit_Key
            pixabay_Key = projectData.pixabay_Key
        })
    getWeatherData(cityName,weatherbit_Key)
    getImageData(cityName,pixabay_Key)
    document.getElementById('placeholder').innerHTML = 'The weather forecast in '+cityName+' on '+travDate+' will be:'
}

document.getElementById('submit').addEventListener('click', performAction)

for (let i = 0; i < 16; i++) {
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
