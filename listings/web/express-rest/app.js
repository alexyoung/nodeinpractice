var app;
var express = require('express');
var routes = require('./routes');

module.exports = app = express();

app.use(express.json()); //<co id="callout-web-rest-1-1" />
app.use(express.methodOverride()); //<co id="callout-web-rest-1-2" />

app.get('/pages', routes.pages.index); //<co id="callout-web-rest-1-3" />
app.get('/pages/:id', routes.pages.show);
app.post('/pages', routes.pages.create);
app.patch('/pages/:id', routes.pages.patch);
app.put('/pages/:id', routes.pages.update);
app.del('/pages/:id', routes.pages.remove);
