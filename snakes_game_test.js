var assert = require('assert');
var Game = require ('./game');
var Dice = require ('./dice');
var Player = require ('./player');
var Board = require ('./board');

//0. Default game start position: 

function createGame(){
  var player1 = new Player('player 1');
  var player2 = new Player('player 2');
  var player3 = new Player('player 3');
  var player4 = new Player('player 4');
  var board = new Board();
  var dice = new Dice();
  var game = new Game(board, dice);
  game.addPlayer(player1);
  game.addPlayer(player2);
  game.addPlayer(player3);
  game.addPlayer(player4);
  return game;
}

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
  });
  it('should have a dice', function(){
    var board = new Board();
    var dice = new Dice();
    var game = new Game(board, dice);
    assert.equal(6, game.dice.sides)
  });
  it('should have a winner if player has currentPosition of 99', function(){
    game = createGame();
    game.players[0].currentPosition = 99,
    winner = game.checkForWinners();
    assert.equal('player 1', winner);
    });
  it("should have no winner if no player's currentPosition of 99", function(){
    game = createGame();
    var winner = game.checkForWinners();
    assert.equal(false, winner);
    });
  //5. Turn counter: 
  it('should have turn counter starting at zero', function(){
    game = createGame();
    assert.equal(0, game.turn);
  });
  it('should increment turn by 1 when next turn is called', function(){
    game = createGame();
    game.incrementTurn();
    assert.equal(1, game.turn);
  });
  it('should make the next turn 0 when the current turn is 3', function(){
    game = createGame();
    game.turn = 3;
    game.incrementTurn();
    assert.equal(0, game.turn);
  })
  it("should return 'The winner is player 1' if they have won", function(){
    game = createGame();
    game.players[0].currentPosition = 98;
    result = game.nextTurn();
    assert.equal('The winner is player 1', result);
  })
});

var testGame = createGame();
testGame.nextTurn();











