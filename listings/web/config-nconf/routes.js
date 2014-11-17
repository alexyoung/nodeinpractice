var nconf = require('nconf'); //<co id="callout-config-5-1" />

module.exports.index = function(req, res) {
  res.send('Using database:', nconf.get('db'));
};
