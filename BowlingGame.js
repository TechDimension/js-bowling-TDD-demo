class Game {
  constructor() {
    this.s = 0;
  }
  roll(pins) {
    this.s += pins;
  }
  score() {
    return this.s;
  }
}

module.exports = Game;
