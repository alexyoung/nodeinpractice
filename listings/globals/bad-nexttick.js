var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();

  events.emit('success'); <co id="callout-globals-nexttick-1"/>

  return events;
}

complexOperations().on('success', function() {
  console.log('success!');
});

