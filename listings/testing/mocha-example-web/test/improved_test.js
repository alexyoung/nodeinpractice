var assert = require('assert');
var index = require('./../index');
var request = require('supertest');

describe('Example web app', function() {
  it('should square numbers', function(done) {
    request(index) //<co id="callout-testing-mocha-web-refactor-1" />
      .get('/square/4')
      .expect(200) //<co id="callout-testing-mocha-web-refactor-2" />
      .expect(/16/, done); //<co id="callout-testing-mocha-web-refactor-3" />
  });

  it('should return a 500 for invalid square requests', function(done) {
    request(index)
      .get('/square')
      .expect(500, done); //<co id="callout-testing-mocha-web-refactor-4" />
  });
});
