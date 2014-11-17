var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello');
});

var songs = express.Router(); //<co id="callout-web-express4-restful-1" />

songs.get('/', function(req, res) { //<co id="callout-web-express4-restful-2" />
  res.send('A list of songs');
});

songs.get('/:id', function(req, res) {
  res.send('A specific song');
});

app.use('/songs', songs); //<co id="callout-web-express4-restful-3" />

app.listen(3000);
