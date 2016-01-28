var Game = function(board, dice){
  this.players = []
  this.board = board;
  this.dice = dice;
  this.turn = 0;
};

Game.prototype = {
  addPlayer: function(player) {
    this.players.push(player);
  },
  checkForWinners: function(){
    for (player of this.players) {
      if (player.currentPosition >= 99) {
        return player.name;
      }
    }
    return false;
  },
  incrementTurn: function(){
    this.turn += 1;
    if (this.turn == this.players.length) {
      this.turn = 0;
    }
  },
  nextTurn: function(){
    var player = this.players[this.turn];
    var roll = this.dice.roll();
    var previousPosition = player.currentPosition;
    player.currentPosition += roll;
    if (player.currentPosition > 99){
      player.currentPosition = 99
    }

    this.showTurn(player, previousPosition, roll);
    
    var winner = this.checkForWinners();
    if (winner) {
      console.log('*********** ' +player.name +' HAS WON!' + '***********')
      return 'The winner is ' +player.name;
    }
    this.incrementTurn();
    this.nextTurn();
  },
  showTurn: function(player, previousPosition, roll){
    console.log(player.name +' rolled a ' +roll + ' and moved from ' + previousPosition + ' and is now on ' +player.currentPosition);
  }
}

module.exports = Game;










