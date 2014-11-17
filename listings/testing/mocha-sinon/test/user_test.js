var assert = require('assert');
var sinon = require('sinon');
var db = sinon.mock(require('./../db')); //<co id="callout-testing-stubbing-database-1" />
var User = require('./../user');

describe('Users', function() {
  var fields = {
    name: 'Huxley',
    hashedPassword: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3' //<co id="callout-testing-stubbing-database-2" />
  };
  var user;

  before(function() {
    user = new User(1, fields);
    var stub = sinon
      .stub(user.db, 'hmget') //<co id="callout-testing-stubbing-database-3" />
      .callsArgWith(2, null, JSON.stringify(fields)); //<co id="callout-testing-stubbing-database-4" />
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
