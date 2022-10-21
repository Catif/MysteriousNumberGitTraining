import Mysterious from './game.js'
import {getName} from "./high-score.js";

let App = {
    init(){
        console.log(Mysterious.generateRandomNumber(100))
        getName()
    },
}


window.addEventListener('load', App.init)