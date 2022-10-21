import Navbar from './navbar.js'
import UI from './ui.js'
import Mysterious from './game.js'

let App = {
    init(){
        Navbar.createNavListener()
        UI.init()
        
        console.log(Mysterious.generateRandomNumber(100))
    }
}


window.addEventListener('load', App.init)