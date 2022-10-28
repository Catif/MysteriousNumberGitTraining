let divHighScore = document.querySelector('#highScore')
let button = document.querySelector(".button");

button.addEventListener("click", function() {
    registerGame();
})


function Game(name, score){
    this.name = name;
    this.score = score;
}

const gamesListView = {
    displayGame(game){
        let row = document.createElement('tr');
            
        let tdName = row.appendChild(document.createElement('td'));
        tdName.innerText = game.name;

        let tdScore = row.appendChild(document.createElement('td'));
        tdScore.innerText = game.score;

        divHighScore.append(row);
    },
    displayFullList(games) {
        games.forEach((game) => {
            this.displayGame(game);
        })
    }
}

export const gamesList = {
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
            gamesListView.displayFullList(this.getGames());
        }
    },
}

export function registerGame(){
    let score = getScore();
    let name = getName();
    let game = new Game(name, score);
    gamesList.addPlayer(game);
    gamesList.save();

    gamesListView.displayGame(game);
}

function getScore(score){
    return score;
}

function getName(){
    return document.querySelector("#pseudo").value;
}