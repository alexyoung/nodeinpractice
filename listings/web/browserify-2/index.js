var MessageBus = require('./messagebus');
var messageBus = new MessageBus();
var $ = require('jquery')(window); //<co id="callout-browserify-2-1" />

messageBus.on('message', function(msg) {
  $('#messages').append('<p>' + msg + '</p>');
});

$(function() { //<co id="callout-browserify-2-2" />
  messageBus.emit('message', 'Hello from example 2');
});
