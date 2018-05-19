const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.towers = [[3,2,1], [], []];
    console.log(this);
    this.promptMove();
  }

  promptMove() {
    let that = this;
    reader.question("Pick a start tower: ", function(response) {
      reader.question("Pick a finish tower: ", function(response2) {
        let start = parseInt(response);
        let finish = parseInt(response2);
        that.isValid(start, finish);
      });
    });
  }

  isValid(start, finish) {
    let boolean;

    if (start < 0 || start > 2 || finish < 0 || finish > 2) {
      console.log("Invalid Move!!!!!")
      return this.promptMove();
    }

    let startTower = this.towers[start];
    let endTower = this.towers[finish];

    if (startTower.length === 0) {
      boolean = false;
    } else if (endTower.length === 0) {
      boolean = true;
    } else if (startTower[startTower.length - 1] >= endTower[endTower.length - 1]) {
      boolean = false;
    } else {
      boolean = true;
    }

    if (boolean) {
      this.move(start,finish);
    } else {
      console.log("Invalid Move");
      this.promptMove();
    }
  }

  move(start, finish) {
    let startTower = this.towers[start];
    let endTower = this.towers[finish];

    endTower.push(startTower.pop());

    console.log(this);
    this.won() === true ? this.endGame() : this.promptMove();
  }

  endGame() {
    console.log("you won... yay...");
    return reader.close();
  }

  won() {
    if(this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    } else {
      return false;
    }
  }
}

let game = new Game();
