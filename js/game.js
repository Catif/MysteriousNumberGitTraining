export let generateRandomNumber = function(max){
    return Math.floor(Math.random() * max)
}

export let askUser = function(message){
    return prompt(message)
}