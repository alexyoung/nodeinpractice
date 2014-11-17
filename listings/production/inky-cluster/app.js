var express = require('express');
var app = express();
var routes = require('./routes');

app.use(express.logger());
app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'jade');

app.use(app.router);
app.use(express.static('./public'));

app.get('/', routes.index);

module.exports = app;
