var stream = require('readable-stream');
var util = require('util');

util.inherits(MemoryStream, stream.Readable);

function MemoryStream(options) {
  options = options || {};
  options.objectMode = true; //<co id="listing-streams-objectmode-1" />
  stream.Readable.call(this, options);
}

MemoryStream.prototype._read = function(size) {
  this.push(process.memoryUsage()); //<co id="listing-streams-objectmode-2" />
};

var memoryStream = new MemoryStream();
memoryStream.on('readable', function() { //<co id="listing-streams-objectmode-3" />
  var output = memoryStream.read();
  console.log('Type: %s, value: %j', typeof output, output);
});
