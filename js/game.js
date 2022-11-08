import {changeTab} from './ui.js'
import {registerScore} from './params.js'
import {essaisMax} from './params.js'

let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}


const smsList = document.querySelector('#sms-list')

const formNumber = document.querySelector('#FormNumber')
const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")

const formName = document.querySelector('#FormName')
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
        let params = JSON.parse(localStorage.getItem("params"))
        if (name.length > params[2]) {
            let divEndDiv = document.getElementById('endGame')
            let p = document.createElement('p')
            p.innerText = 'Le pseudo doit être contenir au maximum : ' + params[2] + " caractères."
            divEndDiv.append(p)
        } else if (name.length <= params[2]) {
            registerScore(name, essais)
            changeTab('Scoreboard')
        }
    }
})

registerName.addEventListener('click', () => {
    let name = nameInput.value
    let params = JSON.parse(localStorage.getItem("params"))
    if (name.length > params[2]){
        let pEndDiv = document.getElementById('error')
        pEndDiv.innerText = 'Le pseudo doit être contenir au maximum ' + params[2] + " caractères."
    }else if (name.length <= params[2]){
        registerScore(name, essais)
        changeTab('Scoreboard')
    }
})

export function run(){
    randomNumber = generateRandomNumber(100)
    essais = 0
    console.log(randomNumber) // Pour debug

    formNumber.style = "";
    getNumber.value = ''
    formName.style.display = "none";
    nameInput.value = ''
    
    essaisMax(essais, randomNumber)
    smsList.innerHTML = ''
    setTimeout(() => createSMS('bot', `Le nombre a été généré !`), 300)
}

function game(numero){
    if (numero === ''){
        createSMS('bot', `Vous n'avez pas écris de nombre !`)
    } else {
        essais++
        getNumber.value = ''
        essaisMax(essais, randomNumber)
        createSMS('user', `Je pense que c'est ${numero} !`)
        if(numero < randomNumber){
            setTimeout(() => createSMS('bot', `Le nombre est plus grand !`), 300)
        } else if(numero > randomNumber) {
            setTimeout(() => createSMS('bot', `Le nombre est plus petit !`), 300)
        } else {
            displayMessage(`Vous avez trouvé le bon chiffre en ${essais} essai(s).`)
            setTimeout(() => createSMS('bot', `Bravo ! Vous avez trouvé le nombre en ${essais} essais !`), 300)
            finishGame()
        }
    }
}

function createSMS(who, message){
    let sms = document.createElement('div')
    sms.classList.add('sms', who)
    sms.innerHTML = `<p>${message}</p>`
    smsList.appendChild(sms)
    smsList.scrollTop = smsList.scrollHeight
}

function finishGame(){
    setTimeout(() => createSMS('bot', `Veuillez entrer votre pseudo pour entrer dans le classement !`), 300)

    formNumber.style.display = "none";
    getNumber.value = ''
    formName.style = "";
    nameInput.value = ''
}

export default {
    run
}