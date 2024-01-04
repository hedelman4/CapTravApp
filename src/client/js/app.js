
/* GeoNames API seemingly not necessary for project
let geonames_ID = ''
geonames_ID = projectData.geonames_ID
fetch('http://api.geonames.org/postalCodeSearchJSON?postalcode=10023&country=US&username=hedelman4')
    .then(res=>res.json())
    .then(geoData=>{
        console.log(geoData)
    })
*/