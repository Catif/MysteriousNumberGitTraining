import Navbar from './navbar.js'
import UI from './ui.js'
import {gamesList} from './high-score.js'
import {registerParams} from './params.js'

const HomeButton = document.querySelector('#LaunchGame')

let App = {
    init(){
        Navbar.createNavListener()
        UI.init()
        gamesList.load()
        HomeButton.addEventListener('click', () => {
            UI.changeTab('Jeu')
        })
        registerParams()
    },
}

window.addEventListener('DOMContentLoaded', App.init)
