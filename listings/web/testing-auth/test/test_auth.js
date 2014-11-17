var app = require('./../app');
var assert = require('assert');
var request = require('supertest');
var administrator = { //<co id="callout-web-testing-auth-1" />
  username: 'admin',
  password: 'secret'
};

describe('authentication', function() {
  var cookies;

  before(function(done) {
    request(app)
      .post('/session')
      .field('username', administrator.username) //<co id="callout-web-testing-auth-2" />
      .field('password', administrator.password)
      .end(function(err, res) {
        assert.equal(200, res.statusCode);
        cookies = res.headers['set-cookie']; //<co id="callout-web-testing-auth-3" />
        done();
      });
  });

  it('should allow admins to access the admin area', function(done) {
    request(app)
      .get('/admin') //<co id="callout-web-testing-auth-4" />
      .set('Cookie', cookies) //<co id="callout-web-testing-auth-5" />
      .expect(200, done);
  });
});
