export default class Game {
    constructor() {
        this.turn = 'X';
        this.board = new Array(9).fill(null);
        this.winner = null;
        this.winCombination = null;
    }

    nextTurn() {
        if(this.turn == 'X') {
            this.turn = 'O';
        }
        else {
            this.turn = 'X';
        }
    }
    makeMove(ind) {
        if(this.winner == null)
            this.board[ind] = this.turn;
    }
    findingWinner() {
        const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let xCount = 0, oCount = 0;
        for(let i = 0; i< winningCombinations.length; i++) {
            for (let j=0; j<winningCombinations[i].length;j++){
                let position = winningCombinations[i][j]
                if(this.board[position]== 'X') {
                    xCount+=1;
                }
                if(this.board[position] == 'O') {
                    oCount+=1;
                }
                if(xCount == 3 || oCount == 3) {
                    xCount == 3 ? this.winner = 'X': this.winner = 'O';
                    this.winCombination = winningCombinations[i];
                }
            }
            xCount = 0;
            oCount = 0;
        }
    }
}

export class GameView {
    constructor() {}
    updateGameBoard(game) {
        this.updateTurns(game);
        let gameBoardValues = game.board;
        console.log("Winnig Combination",game.winCombination);
        for (let i=0; i < gameBoardValues.length; i++){
            const tile = document.querySelector(`.tile[data-index='${i}']`);
            tile.textContent = gameBoardValues[i];
            tile.style.color = gameBoardValues[i]=='X'? '#42BED7':'#D7BAFB';
            if(game.winner!=null && game.winCombination.includes(i)) {
                    console.log(i)
                    tile.style.color = '#23CE68'; 
            }
        }
    }
    updateTurns(game) {
        let playerX = document.querySelector('.player-x');
        let playerO = document.querySelector('.player-o');
        if(game.turn == 'X') {
            playerX.classList.add('active');
            playerO.classList.remove('active');
        } else {
            playerO.classList.add('active');
            playerX.classList.remove('active');
        }
    }
}