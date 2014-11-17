var assert = require('assert');

it('should run a test from another file', function() {
  assert('a' === 'a');
});

it('should run a test after the failed test', function() {
  assert(true);
});
