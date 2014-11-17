var express = require('express');
var app = express();
var routes = require('./routes'); //<co id="web-express-routes-4-1" />

app.use(express.bodyParser());

app.get('/notes', routes.notes.index); //<co id="web-express-routes-4-2" />
app.post('/notes', routes.notes.create);
app.patch('/notes/:id', routes.notes.update);
app.get('/notes/:id', routes.notes.show);

module.exports = app; //<co id="web-express-routes-4-3" />
