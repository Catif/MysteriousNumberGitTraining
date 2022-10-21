let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")
const displayNumber = document.querySelector("#displayNumber")

function init(){
    btnResult.addEventListener('click', function() {
        if(plusOuMoins(getNumber.value) === 'plus'){
            console.log('numéro plus grand !')
        // let addLi = document.createElement("#li")
        } else {
            console.log('numéro moins grand !')
        }
    })
}

function plusOuMoins(number){
    if (number > 50){
        return 'plus'
    }
    return 'moins'
}

if(number > generateRandomNumber()){
    // displayNumber.appendChild(addLi)
}

console.log(generateRandomNumber())

export default {
    init, generateRandomNumber
}