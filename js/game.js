let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

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
            if (result == true){
                appendLi.append(`${getNumber.value} : il faut un nombre plus grand`)
            } else if(result == false) {
                appendLi.append(`${getNumber.value} : il faut un nombre plus petit`)
            } else {
                appendLi.append(`Vous avez trouvé le bon nombre : ${getNumber.value} au bout de ${i} essais`)
            }

        }

        function historicScore(){
            if (!getNumber.value){
                // let appendP = displayNumber.appendChild("#btnResult")
                // appendP.append("test")
            } else {
                if(getNumber.value < 50){
                    displayLi(true)
                } else if(getNumber.value > 50) {
                    displayLi(false)
                } else {
                    displayLi()
                }
            }
                
        }
        
        historicScore()

    })
}


export default {
    init, generateRandomNumber
}