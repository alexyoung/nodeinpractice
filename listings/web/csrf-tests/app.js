var express = require('express');
var app = express();
var middleware = require('./middleware');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.cookieSession({ secret: 'test' }));

app.post('/calendars', middleware.csrf(), function(req, res) {
  res.send(200);
});

module.exports = app;
