var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

util.inherits(MemoryStream, stream);

function MemoryStream(interval) {
  this.readable = true; //<co id="callout-streams-wrap-1" />

  setInterval(function() {
    var data = process.memoryUsage();
    data.date = new Date();
    this.emit('data', JSON.stringify(data) + '\n'); //<co id="callout-streams-wrap-2" />
  }.bind(this), interval);
}

var memoryStream = new MemoryStream(250);
var wrappedStream = new Readable().wrap(memoryStream); //<co id="callout-streams-wrap-3" />

wrappedStream.pipe(process.stdout); //<co id="callout-streams-wrap-4" />
