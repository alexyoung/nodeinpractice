var EventEmitter = require('events').EventEmitter;
var util = require('util');

function MessageBus(options) {
  EventEmitter.call(this, options);
}

util.inherits(MessageBus, EventEmitter);

module.exports = MessageBus;
