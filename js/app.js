import Navbar from './navbar.js'
import UI from './ui.js'
import Mysterious from './game.js'
import {gamesList} from "./high-score.js";

const HomeButton = document.querySelector('#LaunchGame')


let App = {
    init(){
        Navbar.createNavListener()
        UI.init()

        HomeButton.addEventListener('click', () => {
            UI.changeTab('Jeu')
        })

        // Initiliasation du tableau des Scores
        gamesList.load()

        


        // Temporaire
        console.log(Mysterious.generateRandomNumber(100))
    },
}

window.addEventListener('DOMContentLoaded', App.init)