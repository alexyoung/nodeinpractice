var index = require('./../index');
var test = require('tap').test; //<co id="callout-testing-tap-1" />

test("Alex's handy mathematics module", function(t) { //<co id="callout-testing-tap-2" />
  t.test('square', function(t) {
    t.equal(index.square(4), 16);//<co id="callout-testing-tap-3" />
    t.end();//<co id="callout-testing-tap-4" />
  });

  t.test('randomTimeout', function(t) {
    t.plan(1);//<co id="callout-testing-tap-5" />
    index.randomTimeout(function() {
      t.ok(true);//<co id="callout-testing-tap-6" />
    });
  });

  t.end();
});
