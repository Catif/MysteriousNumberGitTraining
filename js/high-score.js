const divRegisterName = document.getElementById("displayRegisterName");

function Game(name, score){
    this.name = name;
    this.score = score;
}

const gamesListView = {
    displayFullList(games) {
        let divHighScore = document.getElementById("highScore");
        games.forEach((game) => {
            let row = document.createElement('tr');
            console.log(row)
            let tdName = row.appendChild(document.createElement('td'));
            let tdScore = row.appendChild(document.createElement('td'));
            tdName.innerText = game.name;
            tdScore.innerText = game.score;
            divHighScore.append(row);
        })
    }
}

const gamesList = {
    games: [],
    addPlayer(game) {
        this.games.push(game);
    },
    save(){
    localStorage.setItem("game", JSON.stringify(this.games));
    },
    getGames(){
        return this.games;
    },
    load(){
    let games = JSON.parse(localStorage.getItem("game"));
        if(games) {
            games.forEach((game) => {
                let g = new Game(game.name, game.score)
                this.games.push(g);
            })
        }
        return this.getGames();
    },
}

export const registerName = {
    display(){
        divRegisterName.classList.remove("displayRegisterName");
    },

    hide(){
        divRegisterName.classList.add("displayRegisterName");
    }
}

export function registerGame(){
    let score = getScore();
    let name = getName();
    let game = new Game(name, score);
    gamesList.addPlayer(game);
    gamesList.save();

    gamesListView.displayFullList(gamesList.games);
}

function getScore(score){
    return score;
}

function getName(){
    return document.querySelector(".input").value;
}