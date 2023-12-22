projectData = {}

fetch('/all').then(res=> {
    projectData = res.json()
    console.log(projectData)
})

fetch('http://api.geonames.org/postalCodeSearchJSON?postalcode=10023&country=US&username=hedelman4').then(res=> {
    console.log(res.json())
})

fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=40.77638&lon=-73.982652&units=I&key=1480091bdd174b2d985790709b87201b').then(res=> {
    console.log(res.json())
})

fetch('https://pixabay.com/api/?key=41352822-6ee0ea802d31538dd01476bfa&q=Manhattan&image_type=photo').then(res=> {
    console.log(res.json())
})