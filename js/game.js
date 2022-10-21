let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

const getNumber = document.querySelector("#number")
const btnResult = document.querySelector("#btnResult")
const displayNumber = document.querySelector("#displayNumber")

function userEntry(){
    btnResult.addEventListener('click', function() {
        return getNumber.value
    })
}

let number = userEntry()



export default {
    generateRandomNumber
}