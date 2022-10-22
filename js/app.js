import Navbar from './navbar.js'
import UI from './ui.js'
import Mysterious from './game.js'

let App = {
    init(){
        Mysterious.init()
        Navbar.createNavListener()
        UI.init()
        
    }
}


window.addEventListener('load', App.init)