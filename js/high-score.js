let search = document.querySelector("#searchUser");
let divHighScore = document.querySelector('#highScore')

search.addEventListener("keyup", (e) => {
    gamesListView.displayUserGame(e.target.value);
})

function Game(name, score){
    this.place = 'none';
    this.name = name;
    this.score = score;
}

const gamesListView = {
    displayGame(game){
        let row = document.createElement('tr');
            
        let tdPlace = row.appendChild(document.createElement('td'));
        tdPlace.innerText = game.place;

        let tdName = row.appendChild(document.createElement('td'));
        tdName.innerText = game.name;

        let tdScore = row.appendChild(document.createElement('td'));
        tdScore.innerText = game.score;

        divHighScore.append(row);
    },
    displayFullList(games) {
        divHighScore.innerHTML = '';
        games.forEach((game) => this.displayGame(game));
    },
    displayUserGame(nameSearch) {
        let games = gamesList.getGames(); 
        let gameFilter = games.filter(game => {
            let name = game.name.toLowerCase();
            if (name.includes(nameSearch.toLowerCase())) {
                return game;
            }
        });
        this.displayFullList(gameFilter);
    }
}

export const gamesList = {
    games: [],
    addGame(game) {
        this.games.push(game);
        this.setPlace();
        this.save();
    },
    save(){
        localStorage.setItem("game", JSON.stringify(this.games));
    },
    delGame(){
        let games = JSON.parse(localStorage.getItem("game"));
        games.splice(games.length-1, 1)
        return
        // localStorage.setItem("game", JSON.stringify(games));
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
        if(games) {
            games.forEach((game) => {
                let g = new Game(game.name, game.score)
                this.games.push(g);
            })
            this.setPlace();
            gamesListView.displayFullList(this.getGames());
        }
    },
}

export function registerGame(name, score){
    let game = new Game(name, score);
    gamesList.addGame(game);
    gamesList.save();
    gamesListView.displayGame(game);
}