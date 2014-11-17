var assert = require('assert'); //<co id="callout-testing-deepequal-1" />
var actual = login('Alex');
var expected = new User('Alex');

assert.deepEqual(actual, expected, 'The user state was not correct'); //<co id="callout-testing-deepequal-2" />

function User(name) {
  this.name = name;
  this.permissions = {
    admin: false
  };
}

function login(name) {
  var user = new User(name);
  user.permissions.admin = true; //<co id="callout-testing-deepequal-3" />
  return user;
}
