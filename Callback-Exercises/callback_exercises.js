const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
      console.clear();
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = 0;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
      this.printTime();
    }
}
