var express = require('express');
var app = express();
var db = require('./db');

app.use(express.bodyParser());

app.get('/notes', function(req, res) {
  db.notes.findAll(function(err, notes) {
    if (err) return next(err);
    res.send(notes);
  });
});

app.post('/notes', function(req, res, next) {
  db.notes.create(req.body.note, function(err, note) {
    if (err) return next(err);
    res.send(note);
  });
});

app.patch('/notes/:id', function(req, res, next) {
  db.notes.update(req.param('id'), req.body.note, function(err, note) {
    if (err) return next(err);
    res.send(note);
  });
});

app.get('/notes/:id', function(req, res, next) {
  db.notes.find(req.param('id'), function(err, note) {
    if (err) return next(err);
    res.send(note);
  });
});

app.listen(3000);
