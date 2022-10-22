import Navbar from './navbar.js'
import UI from './ui.js'
import Mysterious from './game.js'

let App = {
    init(){
        Navbar.createNavListener()
        UI.init()

        Mysterious.run()
    }
}


window.addEventListener('load', App.init)