var assert = require('assert');
var Game = require ('./game');
var Dice = require ('./dice');
var Player = require ('./player');
var Board = require ('./board');

//1. Board 

describe("Board,", function(){
  it('should have 100 squares ', function(){
    var board = new Board();
    assert.equal(100, board.squares.length);
  });
});

//2. Dice 

describe("Dice ", function(){
  it('should should have six sides', function(){
    var dice = new Dice();
    assert.equal(6, dice.sides);
  });
  it('should produce a random number between 1 and 6', function(){
    var dice = new Dice();
    var roll = dice.roll();
    // console.log(roll);
    assert.equal(true, (roll >= 1 && roll <= 6));
  });
});

// 3. Player 

describe("Player", function(){
  it('should have a name', function(){
    var player = new Player('player 1');
    assert.equal('player 1', player.name);
  });
  it('should have a starting position of 0', function(){
    var player = new Player('player 1');
    assert.equal(0, player.currentPosition);
  })
});

// 4. Game. 

describe("Game", function(){
  it('should add four players to the game', function(){
    var player1 = new Player('player 1');
    var player2 = new Player('player 2');
    var player3 = new Player('player 3');
    var player4 = new Player('player 4');
    var game = new Game();
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.addPlayer(player3);
    game.addPlayer(player4);
    assert.equal(4, game.players.length);
  });
  it('should have a board', function(){
    var board = new Board();
    var game = new Game(board);
    assert.equal(100, game.board.squares.length)
  })
});











