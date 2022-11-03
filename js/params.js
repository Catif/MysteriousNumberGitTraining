const nbEssaisMax = 10
const nbGamesToRegister = 10
import {registerGame} from "./high-score.js"

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

export function registerScore(pseudo){
    let games = JSON.parse(localStorage.getItem("game"))
    if (games){
        let maxGameScore = 0
        let nbGames = 0
        let index = 0
        games.forEach(game => {
            if (game.name === pseudo){
                nbGames = nbGames + 1
                if (game.score > maxGameScore){
                    maxGameScore = game.score
                    index = nbGames
                }
            }
        })
        if (nbGames < nbGamesToRegister){
            registerGame()
        }else if (nbGames === nbGamesToRegister){
            if (currentGame.score < maxGameScore){
                delGame(index)
                registerGame()
            }
        }
    }else{
        registerGame()
    }
}

// Si il y a des parties, on parcours les parties. Si le nom du jour match avec le pseudo, si le score de la partie est plus petit que la partie précédente, on la remplace par celle ci.