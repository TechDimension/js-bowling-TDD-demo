const { expect } = require("chai");
const Game = require("./BowlingGame");

describe("BowlingGame", function() {
  describe("gutter game", function() {
    it("should have score of 0", function() {
      const game = new Game();
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score).to.equal(0);
    });
  });
});
