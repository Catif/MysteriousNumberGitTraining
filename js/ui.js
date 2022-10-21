import Navbar from './navbar.js'

const Home = document.querySelector('#MysteriousNumber')
const Game = document.querySelector('#MysteriousNumber')
const Scoreboard = document.querySelector('#MysteriousNumber')
const Settings = document.querySelector('#MysteriousNumber')
const More = document.querySelector('#MysteriousNumber')

let actualEl = Home
let tab = [Game, Scoreboard, Settings, More]

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
    actualEl.classList.remove('hide')

    Navbar.activeNavEl(dataNav)
    el.classList.add('hide');
}

export default{
    init, changeTab, showTab
}