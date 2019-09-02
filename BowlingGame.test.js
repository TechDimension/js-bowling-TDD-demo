const { expect } = require("chai");
const Game = require("./BowlingGame");

var game;

describe("BowlingGame", function() {
  beforeEach(function() {
    game = new Game();
  });

  describe("gutter game", function() {
    it("should have score of 0", function() {
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).to.equal(0);
    });
  });

  describe("an all 1's game", function() {
    it("should have score of 20", function() {
      for (let i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).to.equal(20);
    });
  });
});
