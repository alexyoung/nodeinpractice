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

  describe('create', function() {
    it('should allow notes to be created with valid fields', function(done) {
      request(app)
        .post('/notes')
        .field('note[title]', 'Node in Practice')
        .field('note[body]', 'Testing web applications is fun!')
        .expect(200)
        .end(function(err, res) {
          assert.equal(res.body.title, 'Node in Practice');
          done();
        });
    });
  });

  describe('update', function() {
    it('should allow notes to be updated with valid fields', function(done) {
      request(app)
        .patch('/notes/1')
        .field('note[title]', 'Books I want to read')
        .expect(200)
        .end(function(err, res) {
          assert.equal(res.body.title, 'Books I want to read');
          done();
        });
    });
  });

  describe('find', function() {
    it('show notes', function(done) {
      request(app)
        .get('/notes/2')
        .expect(200)
        .end(function(err, res) {
          assert.equal(res.body.title, 'Literary journals');
          done();
        });
    });
  });
});
