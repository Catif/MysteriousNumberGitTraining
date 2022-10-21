const divRegisterName = document.getElementById("displayRegisterName");

function game(name, score){
    this.name = name;
    this.score = score;
}

const playersList = {
    games: [],
    addPlayer(game) {
        this.games.push(game);
    },
    save(){
    localStorage.setItem("game", JSON.stringify(this.games));
    },

    load(){
    let pseudos = JSON.parse(localStorage.getItem("game"))
    },
}

const registerName = {
    display(){
        divRegisterName.classList.remove("displayRegisterName");
    },

    hide(){
        divRegisterName.classList.add("displayRegisterName");
    }
}

function registerGame(){

}

function getScore(){
    // TODO
}

export function getName(){
    let button = document.querySelector(".button");
    button.addEventListener("click", function (evt) {
        return document.querySelector(".input").value;
    });
}