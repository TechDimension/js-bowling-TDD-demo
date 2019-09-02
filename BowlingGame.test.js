const { expect } = require("chai");
const Game = require("./BowlingGame");

var game;

const rollMany = (pins, n) => {
	for (let i = 0; i < n; i++) {
		game.roll(pins);
	}
};

describe("BowlingGame", () => {
	beforeEach(() => {
		game = new Game();
	});

	describe("gutter game", () => {
		it("should have score of 0", () => {
			rollMany(0, 20);
			expect(game.score()).to.equal(0);
		});
	});

	describe("an all 1's game",() => {
		it("should have score of 20",() => {
			rollMany(1, 20);
			expect(game.score()).to.equal(20);
		});
	});
});
