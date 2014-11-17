var stream = require('stream');
var util = require('util');

util.inherits(MemoryStream, stream.Readable);
util.inherits(OutputStream, stream.Writable);

function MemoryStream() {
  this.isTTY = process.stdout.isTTY; //<co id="callout-streams-advanced-pipe-event-1" />
  stream.Readable.call(this);
}

MemoryStream.prototype._read = function() {
  var text = JSON.stringify(process.memoryUsage()) + '\n';
  if (this.isTTY) { //<co id="callout-streams-advanced-pipe-event-2" />
    this.push('\u001b[32m' + text + '\u001b[39m');
  } else {
    this.push(text);
  }
};

// A simple writable stream
function OutputStream() {
  stream.Writable.call(this);
  this.on('pipe', function(dest) { //<co id="callout-streams-advanced-pipe-event-3" />
    dest.isTTY = this.isTTY;
  }.bind(this));
}

OutputStream.prototype._write = function(chunk, encoding, cb) {
  util.print(chunk.toString());
  cb();
};

var memoryStream = new MemoryStream();

// Switch the desired output stream by commenting one of these lines:
//memoryStream.pipe(new OutputStream);
memoryStream.pipe(process.stdout);
