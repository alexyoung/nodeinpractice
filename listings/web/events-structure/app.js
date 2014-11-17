var express = require('express');
var app = express();
var emails = require('./emails');
var routes = require('./routes');

app.use(express.json());

app.post('/users', routes.users.create); //<co id="callout-events-structure-1-1" />

app.on('user:created', emails.welcome); //<co id="callout-events-structure-1-2" />

module.exports = app;
