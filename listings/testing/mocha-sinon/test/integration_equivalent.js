var assert = require('assert');
var sinon = require('sinon');
var User = require('./../user');

describe('Users (integration test)', function() {
  var fields = {
    name: 'Huxley',
    hashedPassword: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'
  };
  var user;
  var userId = 1;

  before(function(done) {
    user = new User(userId, fields);
    user.save(done);
  });

  after(function() {
    // Tell Redis to close the connection when ready
    user.db.unref();
  });

  it('should load users', function(done) {
    var testUser = new User(userId);
    testUser.load(function(err) {
      assert.equal(testUser.fields.name, user.fields.name);
      done(err);
    });
  });

  it('should allow users to sign in', function(done) {
    user.signIn('test', function(err, signedIn) {
      assert(signedIn);
      done(err);
    });
  });

  it('should require the correct password', function(done) {
    user.signIn('wrong', function(err, signedIn) {
      assert(!signedIn);
      done(err);
    });
  });
});
