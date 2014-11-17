var assert = require('assert');
var fs = require('fs');
var CSVParser = require('./csvparser');

var parser = new CSVParser();
var actual = [];

fs.createReadStream(__dirname + '/sample.csv').pipe(parser);

process.on('exit', function() { //<co id="callout-streams-testing-1" />
  actual.push(parser.read()); //<co id="callout-streams-testing-2" />
  actual.push(parser.read());
  actual.push(parser.read());

  var expected = [ //<co id="callout-streams-testing-3" />
    { name: 'Alex', location: 'UK', role: 'admin' },
    { name: 'Sam', location: 'France', role: 'user' },
    { name: 'John', location: 'Canada', role: 'user' }
  ];

  assert.deepEqual(expected, actual); //<co id="callout-streams-testing-4" />
});
