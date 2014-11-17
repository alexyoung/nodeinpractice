var Readable = require('stream').Readable;

function MyStream(options) {
  Readable.call(this, options); //<co id="callout-streams-inheritance-1" />
}

MyStream.prototype = Object.create(Readable.prototype, { //<co id="callout-streams-inheritance-2" />
  constructor: { value: MyStream }
});
