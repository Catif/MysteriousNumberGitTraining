import Navbar from './navbar.js'
import Mysterious from './game.js'

let App = {
    init(){
        Navbar.createNavListener()
        
        console.log(Mysterious.generateRandomNumber(100))
    }
}


window.addEventListener('load', App.init)