var EventEmitter = require('events').EventEmitter; //<co id="callout-browserify-1-1" />
var util = require('util');

function MessageBus(options) {
  EventEmitter.call(this, options);
  this.on('message', this.messageReceived.bind(this));
}

util.inherits(MessageBus, EventEmitter); //<co id="callout-browserify-1-2" />

MessageBus.prototype.messageReceived = function(message) {
  console.log('RX:', message);
};

var messageBus = new MessageBus();
messageBus.emit('message', 'Hello world!');
