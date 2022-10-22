import Navbar from './navbar.js'

const Home = document.querySelector('#MysteriousNumber')
// const Game = document.querySelector('#MysteriousNumber')
// const Scoreboard = document.querySelector('#MysteriousNumber')
// const Settings = document.querySelector('#MysteriousNumber')
const More = document.querySelector('#More')

let actualEl = Home
let tab = [More] // Game, Scoreboard, Settings,

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
    init, changeTab, showTab
}