import Navbar from './navbar.js'

// == Liste des différentes partie du site ==
const Home = document.querySelector('#Home')
const Game = document.querySelector('#MysteriousNumber')
// const Scoreboard = document.querySelector('#Scoreboard')
// const Settings = document.querySelector('#Settings')
const More = document.querySelector('#More')

let actualEl = Home
// == Ajouter dans le tableau, quand vous avez déclarer la variable au dessus ==
let tab = [Game, More] // Scoreboard, Settings, More

let init = () => {
    tab.forEach(element => {
        element.classList.add('hide')
    });
}

let changeTab = (name) => {
    switch (name){
        case 'Jeu':
            showTab(name, Game)
            break;
        case 'Scoreboard':
            showTab(name, Scoreboard)
            break;
        case 'Parametre':
            showTab(name, Settings)
            break;
        case 'A propos':
            showTab(name, More)
            break;
        default:
            showTab(name, Home)
            break;
    }
}

let showTab = (dataNav, el) => {
    actualEl.classList.add('hide')
    actualEl = el;
    Navbar.activeNavEl(dataNav)
    el.classList.remove('hide');
}

export default{
    init, changeTab
}