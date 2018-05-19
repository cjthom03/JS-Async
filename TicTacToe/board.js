const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});



class Board {
  constructor() {
    this.board = [[" "," "," "],[" "," "," "],[" "," "," "]];
  }

  promptMove(player) {
    let that = this;
    console.log(that.board);

    reader.question("Pick a spot! (x,y): ", (response) => {
      let [x,y] = response.split(",");
      x = parseInt(x);
      y = parseInt(y);

      that.validMove(x,y,player);
    });
  }

  validMove(x,y,player) {
    if ( x < 0 || x > 2 || y < 0 || y > 2  || this.board[x][y] !== " ") {
      console.log("Invalid Move!!");
      this.promptMove();
    } else {
      this.placeMark(x,y,player);
    }
  }

  placeMark(x,y,player) {
    this.board[x][y] = player.mark;
    console.log("congrats your code works");
    console.log(this.board);
    return player;
  }
}

module.exports = Board;
