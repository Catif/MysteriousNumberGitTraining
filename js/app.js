import Navbar from './navbar.js'
import UI from './ui.js'
import {gamesList} from './high-score.js'

const HomeButton = document.querySelector('#LaunchGame')

let App = {
    init(){
        Navbar.createNavListener()
        UI.init()
        gamesList.load()
        HomeButton.addEventListener('click', () => {
            UI.changeTab('Jeu')
        })
    },
}

window.addEventListener('DOMContentLoaded', App.init)