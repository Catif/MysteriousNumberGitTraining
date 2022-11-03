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
    displayGame(game, place = 1){
        let row = document.createElement('tr');
            
        let tdPlace = row.appendChild(document.createElement('td'));
        tdPlace.innerText = place;

        let tdName = row.appendChild(document.createElement('td'));
        tdName.innerText = game.name;

        let tdScore = row.appendChild(document.createElement('td'));
        tdScore.innerText = game.score;

        divHighScore.append(row);
    },
    displayFullList(games) {
        divHighScore.innerHTML = '';
        games.sort((a, b) => a.score - b.score);
        games.forEach((game, id) => this.displayGame(game, id+1));
    }
}

export const gamesList = {
    games: [],
    addPlayer(game) {
        this.games.push(game);
        this.save();
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

export function registerGame(name, score){
    let game = new Game(name, score);
    gamesList.addPlayer(game);
    gamesListView.displayFullList(gamesList.getGames());
}