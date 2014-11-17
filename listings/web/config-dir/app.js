var express = require('express');
var app = express();
var config = require('./config'); //<co id="callout-config-3-1" />

app.listen(config.port, function() {
  console.log('Using database:', config.db);
  console.log('Listening on port:', config.port);
});
