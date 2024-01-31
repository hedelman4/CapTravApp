async function getWeatherData(cityName,weatherbit_Key,weatherForecast='') {
    await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+cityName+'&units=I&key='+weatherbit_Key)
        .then(res=>res.json())
        .then(weatherData=>{
            weatherForecast = weatherData['data'][document.getElementById('inputDate').selectedIndex - 1]
        })
        document.getElementById('forecast').innerHTML = 'Temperature: '+weatherForecast['temp']+'<br>'+weatherForecast['weather']['description'];
}

async function getImageData(cityName,pixabay_Key,imageURL='') {
    await fetch('https://pixabay.com/api/?key='+pixabay_Key+'&q='+cityName+'&image_type=photo')
        .then(res=>res.json())
        .then(imageData=>{
            imageURL = imageData['hits'][0]['largeImageURL']
        })
        document.getElementById('image').style.backgroundImage = "url('"+imageURL+"')"
}

async function getGeoData(cityName,geonames_ID,countryCode='') {
    await fetch('http://api.geonames.org/postalCodeSearchJSON?placename='+cityName+'&maxRows=1&username='+geonames_ID)
        .then(res=>res.json())
        .then(geoData=>{
            countryCode = geoData['postalCodes']['0']['countryCode']
        })
        document.getElementById('placeholder').innerHTML = 'The weather forecast in '+cityName+', '+countryCode+' will be:'
}

//Primary Function
async function performAction(cityName='',weatherbit_Key='',pixabay_Key='',geonames_ID='') {
    cityName = document.getElementById('inputName').value
    await fetch('/all')
        .then(res=>res.json())
        .then(projectData=>{
            weatherbit_Key = projectData.weatherbit_Key
            pixabay_Key = projectData.pixabay_Key
            geonames_ID = projectData.geonames_ID
        })
    getWeatherData(cityName,weatherbit_Key)
    getImageData(cityName,pixabay_Key)
    getGeoData(cityName,geonames_ID)
}

function buildDates() {
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
}

export{getWeatherData,getImageData,performAction,buildDates}