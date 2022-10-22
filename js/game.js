let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

let randomNumber = generateRandomNumber(100);
console.log(randomNumber)

const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")
const displayNumber = document.querySelector("#displayNumber")
let i = 0

function init(){
    btnResult.addEventListener('click', function() {

        let createLi = document.createElement("li")
        
        function displayLi(result){
            let appendLi = displayNumber.appendChild(createLi)
            i = i + 1

            switch (result){
                case 'more':
                    appendLi.append(`${getNumber.value} : il faut un nombre plus grand`)
                    break;
                case 'less':
                    appendLi.append(`${getNumber.value} : il faut un nombre plus petit`)
                    break;
                case true:  
                    appendLi.append(`Vous avez trouvé le bon nombre : ${getNumber.value} au bout de ${i} essais`)
                    break;
                case false:
                    i = 0
                    appendLi.append(`Veuillez entrer un nombre`)
                    break;
            }

        }

        function historicScore(){
            if (!getNumber.value){
                displayLi(false)
            } else {
                if(getNumber.value < randomNumber){
                    displayLi('more')
                } else if(getNumber.value > randomNumber) {
                    displayLi('less')
                } else {
                    displayLi(true)
                }
            }
                
        }
        
        historicScore()

    })
}


export default {
    init, generateRandomNumber
}