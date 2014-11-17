var assert = require('assert');
var CountStream = require('./countstream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

countStream.on('total', function(count) { //<co id="callout-intro-countstream-test-1" />
  assert.equal(count, 1); //<co id="callout-intro-countstream-test-2" />
  passed++;
});

fs.createReadStream(__filename).pipe(countStream); //<co id="callout-intro-countstream-test-3" />

process.on('exit', function() { //<co id="callout-intro-countstream-test-4" />
  console.log('Assertions passed:', passed);
});
