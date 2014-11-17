var assert = require('assert');

it('should run a test', function() { //<co id="callout-testing-runner-example-1" />
  assert('a' === 'a'); 
});

it('should allow a test to fail', function() {
  assert(true);
  assert.equal('a', 'b', 'Bad test'); //<co id="callout-testing-runner-example-2" />

});

it('should run a test after the failed test', function() {
  assert(true); //<co id="callout-testing-runner-example-3" />
});
