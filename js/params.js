import {registerGame, gamesList} from "./high-score.js"

let nbEssaisMax = 10
let nbGamesToRegister = 10
let nbCharacter = 30

let resetScoreBoard = document.getElementById("resetScoreBoard")
resetScoreBoard.addEventListener('click', () => {
    if (confirm("Voulez-vous vraiment réinitialiser le classement ?")) {
        gamesList.games = []
        gamesList.save()
    }
})

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

export function essaisMax(nbEssais) {
    return nbEssaisMax - nbEssais
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
            let gameToRemove
            games.forEach((game, index) => {
                if (game.score > maxScore){
                    maxScore = game.score
                    gameToRemove = index
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
    nbEssaisMax = document.getElementById("nbAttempts").value != "" ? document.getElementById("nbAttempts").value : nbEssaisMax
    nbGamesToRegister = document.getElementById("nbGamesToRegister").value  != "" ? document.getElementById("nbGamesToRegister").value : nbGamesToRegister
    nbCharacter = document.getElementById("nbCharacter").value  != "" ? document.getElementById("nbCharacter").value : nbCharacter
    params.push(nbEssaisMax)
    params.push(nbGamesToRegister)
    params.push(nbCharacter)
    localStorage.setItem("params", JSON.stringify(params))
}