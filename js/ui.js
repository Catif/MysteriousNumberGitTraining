import Navbar from './navbar.js'
import {run} from './game.js'
import {gamesList} from "./high-score.js"

// == Liste des différentes partie du site ==
const Home = document.querySelector('#Home')
const Game = document.querySelector('#MysteriousNumber')
const Scoreboard = document.querySelector('#Scoreboard')
const Settings = document.querySelector('#Settings')
const remaningNumber = document.querySelector('#remaningNumber')
const More = document.querySelector('#More')

let actualEl = Home
// == Ajouter dans le tableau, quand vous avez déclarer la variable au dessus ==
let tab = [Game, Scoreboard, Settings, More] // Settings

let init = () => {
    tab.forEach(element => {
        element.setAttribute('style', 'display: none;')
    });
}

export let changeTab = (name) => {
    switch (name){
        case 'Accueil':
            showTab('Accueil', Home)
            break;
        case 'Jeu':
            const pEndDiv = document.getElementById('error')
            pEndDiv.innerText = ""
            document.querySelector('#inGame').style.display = "inline"
            remaningNumber.innerHTML = ""
            showTab('Jeu', Game)
            run()
            break;
        case 'Scoreboard':
            // actualise le tableau des Scores
            gamesList.load()
            showTab('Scoreboard', Scoreboard)
            break;
        case 'Parametre':
            showTab('Parametre', Settings)
            break;
        case 'A propos':
            showTab('A propos', More)
            break;
        default:
            console.error('Nom de Tab non trouvé, redirection vers l\'accueil')
            showTab('Accueil', Home)
            break;
    }
}

let showTab = (dataNav, el) => {
    actualEl.setAttribute('style', 'display: none;')
    actualEl = el;
    Navbar.activeNavEl(dataNav)
    actualEl.setAttribute('style', '')
}

export default{
    init, changeTab
}