import Navbar from './navbar.js'
import UI from './ui.js'
import Mysterious from './game.js'
import {gamesList} from "./high-score.js";

let App = {
    init(){
        Navbar.createNavListener()
        UI.init()

        Mysterious.run()
        
        // Initiliasation du tableau des Scores
        gamesList.load()
    },
}

window.addEventListener('load', App.init)