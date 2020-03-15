// import { getJSON, getLocation } from './utilities.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// let url = '';
// getLocation().then(
//     location => {
//         console.log(location);
//         url += `${baseUrl}&latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&maxradiuskm=100`;
//         getJSON(url)
//             .then( quakes =>
//                 {
//                     console.log(quakes);
//                 }
//             )
//     }
// )

import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();
