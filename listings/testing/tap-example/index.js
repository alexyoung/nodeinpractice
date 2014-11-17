module.exports.square = function(a) {
  return a * a;
};

module.exports.randomTimeout = function(cb) {
  setTimeout(cb, Math.random() * 500);
};
