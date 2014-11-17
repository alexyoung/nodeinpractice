function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
  console.log(this.message);
};

var bomb = new Bomb();

setTimeout(bomb.explode.bind(bomb), 1000); //<co id="callout-settimeout-2-1" />
