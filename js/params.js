import {registerGame, gamesList} from "./high-score.js"

let nbEssaisMax = 10
let nbGamesToRegister = 5
let nbCharacter = 30

let buttonRegisterParams = document.getElementById("buttonRegisterParams")
buttonRegisterParams.addEventListener("click", function () {
    registerParams()
})

let params = JSON.parse(localStorage.getItem("params"))
if (params !== null){
    nbEssaisMax = params[0]
    nbGamesToRegister = params[1]
    nbCharacter = params[2]
    let inputNbEssaisMax = document.getElementById('nbAttempts')
    inputNbEssaisMax.value = nbEssaisMax
    let inputNbGamesToRegister = document.getElementById('nbGamesToRegister')
    inputNbGamesToRegister.value = nbGamesToRegister
    let inputNbCharacter = document.getElementById('nbCharacter')
    inputNbCharacter.value = nbCharacter
}

export function essaisMax(nbEssais, nombreATrouver) {
    let remaningNumber = nbEssaisMax - nbEssais
    let divRemaningNumber = document.getElementById("remaningNumber")
    divRemaningNumber.innerText = ""
    let p = document.createElement("p")
    p.innerText = "Vous avez " + remaningNumber + " tentatives."
    if (nbEssais < nbEssaisMax){
        p.innerText = "Il vous reste : " + remaningNumber + " essais"
    }else if (nbEssais == nbEssaisMax){
        p.innerText = "Vous n'avez plus d'essai, dommage ! Le nombre à trouvé était le nombre : " + nombreATrouver
        document.querySelector('#inGame').style.display = "none"
    }
    divRemaningNumber.append(p)
}

export function registerScore(name, score) {
    let games = JSON.parse(localStorage.getItem("game"))
    if (games === null) {
        registerGame(name, score)
    }else{
        if (games.length < nbGamesToRegister) {
            registerGame(name, score)
        }else if (games.length == nbGamesToRegister) {
            let maxScore = 0
            let index = 0
            let gameToRemove
            games.forEach(game => {
                if (game.score > maxScore){
                    maxScore = game.score
                    gameToRemove = index
                    index = index + 1
                }
            })
            if (score <= maxScore){
                registerGame(name, score)
                gamesList.delGame(gameToRemove)
            }
        }
    }
}

export function registerParams(){
    let params = [];
    nbEssaisMax = document.getElementById("nbAttempts").value
    nbGamesToRegister = document.getElementById("nbGamesToRegister").value
    nbCharacter = document.getElementById("nbCharacter").value
    params.push(nbEssaisMax)
    params.push(nbGamesToRegister)
    params.push(nbCharacter)
    localStorage.setItem("params", JSON.stringify(params))
}