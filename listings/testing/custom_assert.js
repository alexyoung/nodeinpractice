var assert = require('assert'); //<co id="callout-testing-custom-assertion-1" />
assert.match = match;

function match(actual, regex, message) {
  if (!actual.match(regex)) { //<co id="callout-testing-custom-assertion-2" />
    assert.fail(actual, regex, message, 'match', assert.match);
  }
}

assert.match('{ name: "Alex" }', /Alex/, 'The name should be "Alex"'); //<co id="callout-testing-custom-assertion-3" />

assert.throws( //<co id="callout-testing-custom-assertion-4" />
  function() {
    assert.match('{ name: "Alex" }', /xlex/, 'This should fail');
  },
  assert.AssertionError,
  'A non-matching regex should throw an AssertionError'
);
