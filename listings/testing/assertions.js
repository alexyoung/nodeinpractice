var assert = require('assert'); //<co id="callout-testing-assertions-1" />
var actual = square(2);
var expected = 4;

assert(actual, 'square() should have returned a value'); //<co id="callout-testing-assertions-2" />
assert.equal(
  actual,
  expected,
 'square() did not calculate the correct value'
); //<co id="callout-testing-assertions-3" />

function square(number) { //<co id="callout-testing-assertions-4" />
  return number * number + 1;
}
