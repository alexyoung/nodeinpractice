var stream = require('stream');
//<co id="callout-streams-writable-1" />
GreenStream.prototype = Object.create(stream.Writable.prototype, {
  constructor: { value: GreenStream }
});

function GreenStream(options) {
  stream.Writable.call(this, options);
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write('\u001b[32m' + chunk + '\u001b[39m'); //<co id="callout-streams-writable-2" />
  callback(); //<co id="callout-streams-writable-3" />
};

process.stdin.pipe(new GreenStream()); //<co id="callout-streams-writable-4" />
