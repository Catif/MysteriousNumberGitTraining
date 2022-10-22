import Mysterious from './game.js'
import {registerName} from "./high-score.js";
import {registerGame} from "./high-score.js";

let App = {
    init(){
        console.log(Mysterious.generateRandomNumber(100))
        registerName.display();
        let button = document.querySelector(".button");
        button.addEventListener("click", function() {
            registerGame();
            registerName.hide();
        })
    },
}

window.addEventListener('load', App.init)