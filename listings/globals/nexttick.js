var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();

  process.nextTick(function() { <co id="callout-globals-nexttick-2"/>
    events.emit('success');
  });

  return events;
}

complexOperations().on('success', function() {
  console.log('success!');
});

