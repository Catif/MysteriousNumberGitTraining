import {generateRandomNumber, askUser} from './game.js'

let App = {
    init(){
        console.log('it\'s work')

        console.log(generateRandomNumber(100))
    }
}


window.addEventListener('load', App.init)