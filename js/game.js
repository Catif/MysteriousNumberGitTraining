import { registerGame } from './high-score.js'
import {changeTab} from './ui.js'

let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

const informationEl = document.querySelector("#Information")

const inGame = document.querySelector("#inGame");
const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")

const endGame = document.querySelector("#endGame");
const nameInput = document.querySelector("#pseudo")
const registerName = document.querySelector("#RegisterName")

let essais
let randomNumber

btnResult.addEventListener('click', function() {
    let numero = getNumber.value
    game(numero)
})
getNumber.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let numero = getNumber.value
        game(numero)
    }
})

nameInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let name = nameInput.value
        registerGame(name, essais)
        changeTab('Scoreboard')
    }
})
registerName.addEventListener('click', () => {
    let name = nameInput.value
    registerGame(name, essais)
    changeTab('Scoreboard')
})

export function run(){
    randomNumber = generateRandomNumber(100)
    essais = 0

    console.log(randomNumber)

    inGame.style.display = "block";
    getNumber.value = ''
    endGame.style.display = "none";
    nameInput.value = ''
    
    displayMessage('Un nombre aléatoire vient d\'être généré par la machine !')
}

function game(numero){
    if (Number.isInteger(numero)){
        displayMessage('Vous n\'avez pas écris de nombre !')
    } else {
        essais++
        getNumber.value = ''
        if(numero < randomNumber){
            displayMessage(`Le chiffre est plus grand ! (dernier nombre : ${numero}) `)
        } else if(numero > randomNumber) {
            displayMessage(`Le chiffre est plus petit ! (dernier nombre : ${numero}) `)
        } else {
            displayMessage(`Vous avez trouvé le bon chiffre en ${essais} essai(s).`)
            finishGame()
        }
    }
}

function displayMessage(message){
    informationEl.innerText = message
}

function finishGame(){
    inGame.style.display = "none";
    nameInput.value = ''
    endGame.style.display = "block";
}
        


export default {
    run
}