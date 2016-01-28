var Dice = function(){
  this.sides = 6;
}

Dice.prototype ={
  roll: function(){
    return Math.floor(Math.random() * 6) + 1;
  },
}


module.exports = Dice;