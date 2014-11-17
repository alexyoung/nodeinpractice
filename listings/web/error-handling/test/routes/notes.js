var app = require('./../../app');
var assert = require('assert');
var db = require('./../../db');
var request = require('supertest');

describe('notes', function() {
  before(function(done) {
    db.notes.seed({
      1: {
        title: 'Nature documentaries',
        body: 'Life\nThe Planets'
      },

      2: {
        title: 'Literary journals',
        body: 'London Review of Books\nLiterary Review'
      }
    }, done);
  });

  describe('find', function() {
    it('should show notes', function(done) {
      request(app)
        .get('/notes/2')
        .expect(200)
        .end(function(err, res) {
          assert.equal(res.body.title, 'Literary journals');
          done();
        });
    });

    it('should return a 404 for IDs that do not exist', function(done) {
      request(app)
        .get('/notes/999')
        .expect(404, done);
    });

    it('should send JSON errors when requested', function(done) {
      request(app)
        .get('/notes/999')
        .set('Accept', 'application/json')
        .expect(404, function(err, res) {
          assert.equal(res.body.name, 'NotFound');
          done();
        });
    });
  });
});
