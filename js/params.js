import {registerGame} from "./high-score.js"
import {gamesList} from "./high-score.js"

const nbEssaisMax = 10
const nbGamesToRegister = 10

let button = document.querySelector(".button")
button.addEventListener("click", function() {
    registerScore(5)
})

export function essaisMax(nbEssais, nombreATrouver) {
    let remaningNumber = nbEssaisMax - nbEssais
    let divRemaningNumber = document.getElementById("remaningNumber")
    let p = document.createElement("p")
    if (nbEssais < nbEssaisMax){
        p.innerText = "Il vous reste : " + remaningNumber + " essais"
    }else if (nbEssais === nbEssaisMax){
        p.innerText = "Vous n'avez plus d'essai, dommage ! Le nombre à trouvé était le nombre : " + nombreATrouver
    }
    divRemaningNumber.append(p)
}

export function registerScore(currentScore) {
    let games = JSON.parse(localStorage.getItem("game"))
    if (games === null) {
        registerGame()
    }else{
        if (games.length < nbGamesToRegister) {
            registerGame()
        } else if (games.length === nbGamesToRegister) {
            let lastGame = games[games.length - 1]
            if (currentScore <= lastGame.score) {
                gamesList.delGame()
                registerGame()
            }
        }
    }
}
    // supprimer la dernière, ajouter la nouvelle. Pas plus compliqué que ça.