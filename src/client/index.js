import{performAction,buildDates} from './js/app.js'

buildDates()

document.getElementById('submit').addEventListener('click', performAction)