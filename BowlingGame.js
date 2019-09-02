class Game {
  constructor() {
	this.rolls = new Array(21);
    this.currentRoll = 0;
  }
  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  score() {
	let score = 0;
	for (let i=0; i< this.rolls.length - 1 ; i ++){
	  score += this.rolls[i];
	}
	return score;
  }
}

module.exports = Game;
