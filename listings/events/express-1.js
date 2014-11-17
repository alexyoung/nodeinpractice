var express = require('express');
var app = express();

app.on('hello-alert', function() {
  console.warn('Warning!');
});

app.get('/', function(req, res){
  res.app.emit('hello-alert'); //<co id="callout-events-detect-1" />
  res.send('hello world');
});

app.listen(3000);
