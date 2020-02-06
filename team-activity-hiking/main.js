import Hikes from './hiking-class.js'; 

const myHikes = new Hikes(); 

document.querySelector('#hikes').innerHTML = myHikes.showHikeList();