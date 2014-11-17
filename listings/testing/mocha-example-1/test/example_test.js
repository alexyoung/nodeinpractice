var index = require('./../index');
var assert = require('assert');

describe('Amazing mathematical operations', function() { //<co id="callout-testing-mocha-1-1" />
  it('should square numbers', function() {
    assert.equal(index.square(4), 16);
  });

  it('should run a callback after a delay', function(done) { //<co id="callout-testing-mocha-1-2" />
    index.randomTimeout(function() {
      assert(true);
      done(); //<co id="callout-testing-mocha-1-3" />
    });
  });
});
