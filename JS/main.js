import Game, {GameView} from './game.js';

let game = new Game();
let gameView = new GameView();

document.querySelector('.start').addEventListener("click",()=>{
    console.log("Hello")
    game = new Game();
    gameView.updateGameBoard(game);
})

let tiles = document.querySelectorAll('.tile');
tiles.forEach((tile)=>{
    tile.addEventListener("click", ()=>{
       let i = tile.dataset.index;
       if(game.board[i] == null) {
            game.makeMove(i);
            game.nextTurn(); 
            gameView.updateGameBoard(game);
            game.findingWinner();
            if(game.winner != null) {
                console.log("Winner is ", game.winner);
                gameView.updateGameBoard(game);
            }    
       }
    })
})

gameView.updateGameBoard(game);