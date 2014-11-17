var errors = require('./errors');
var express = require('express');
var app = express();
var routes = require('./routes');

app.use(express.bodyParser());

app.get('/notes/:id', routes.notes.show);

app.use(function(err, req, res, next) { //<co id="callout-errors-3-1" />
  if (process.env.NODE_ENV !== 'test') { //<co id="callout-errors-3-2" />
    console.error(err.stack);
  }

  res.status(err.statusCode || 500);

  res.format({
    text: function() {
      res.send(err.message); //<co id="callout-errors-3-3" />
    },

    json: function() {
      res.send(err);
    },

    html: function() {
      res.render('errors', { err: err });
    }
  });
});

module.exports = app;
