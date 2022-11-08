let tbodyHighScore = document.querySelector('#highScore')
let button = document.querySelector(".button");

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

        tbodyHighScore.append(row);
    },
    displayFullList(games) {
        tbodyHighScore.innerHTML = "";
        games.forEach((game) => {
            this.displayGame(game);
        })
    }
}

export const gamesList = {
    games: [],
    isLoad: false,
    addGame(game) {
        this.games.push(game);
        this.setPlace();
    },
    save(){
        localStorage.setItem("game", JSON.stringify(this.games));
    },
    delGame(i){
        let game = JSON.parse(localStorage.getItem("game"));
        game.splice(i, 1)
        this.games = game
        localStorage.setItem("game", JSON.stringify(game));
    },
    getGames(){
        return this.games;
    },
    setPlace(){
        this.games.sort((a, b) => a.score - b.score);
        this.games.forEach((game, index) => {
            game.place = index + 1;
        });
    },
    load(){
        let games = JSON.parse(localStorage.getItem("game"));
        if (this.isLoad === false){
            if(games) {
                games.forEach((game) => {
                    let g = new Game(game.name, game.score)
                    this.games.push(g);
                })
            }
            this.isLoad = true;
        }
        gamesListView.displayFullList(this.getGames());
    },
}

export function registerGame(name, score){
    let game = new Game(name, score);
    gamesList.addGame(game);
    gamesList.setPlace();
    gamesList.save();
    gamesListView.displayGame(game);
}