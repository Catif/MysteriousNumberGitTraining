let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")
const informationEl = document.querySelector("#Information")

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

function run(){
    randomNumber = generateRandomNumber(300)
    essais = 0

    console.log(randomNumber)

    displayMessage('Un nombre aléatoire vient d\'être généré par la machine !')
}

function game(numero){
    if (Number.isInteger(numero)){
        displayMessage('Vous n\'avez pas écris de nombre !')
    } else {
        essais++
        if(numero < randomNumber){
            displayMessage('Le chiffre est plus grand !')
        } else if(numero > randomNumber) {
            displayMessage('Le chiffre est plus petit !')
        } else {
            displayMessage(`Vous avez trouvé le bon chiffre en ${essais} essai(s).`)
        }
    }
}

function displayMessage(message){
    informationEl.innerText = message
}
        


export default {
    run
}