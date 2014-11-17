module.exports.square = function(a) { //<co id="callout-testing-mocha-2-1" />
  return a * a;
};

module.exports.randomTimeout = function(cb) {
  setTimeout(cb, Math.random() * 500); //<co id="callout-testing-mocha-2-2" />
};
