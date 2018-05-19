const Board = require('./board');
console.log(Board);

let board2 = new Board();

class Game {
  constructor() {
    this.player1 = {
      name: "Bob",
      mark: "X"
    };
    this.player2 = {
      name: "James",
      mark: "O"
    };
    this.board = board2;
    this.currentPlayer = this.player1;

    this.play();
  }

  play() {
    this.board.promptMove(this.currentPlayer);
  }
}

let game = new Game();
