import Mysterious from './game.js'

let App = {
    init(){
        console.log(Mysterious.generateRandomNumber(100))
    }
}


window.addEventListener('load', App.init)