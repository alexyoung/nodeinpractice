function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
  console.log(this.message);
};

var bomb = new Bomb();

var timeoutId = setTimeout(bomb.explode.bind(bomb), 1000);

clearTimeout(timeoutId); //<co id="callout-settimeout-3-1" />


