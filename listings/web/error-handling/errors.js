var util = require('util');

function HTTPError() { //<co id="callout-errors-2-1" />
  Error.call(this, arguments);
}

util.inherits(HTTPError, Error); //<co id="callout-errors-2-2" />

function NotFound(message) {
  HTTPError.call(this);
  Error.captureStackTrace(this, arguments.callee); //<co id="callout-errors-2-3" />
  this.statusCode = 404; //<co id="callout-errors-2-4" />
  this.message = message;
  this.name = 'NotFound';
}
util.inherits(NotFound, HTTPError); //<co id="callout-errors-2-5" />

module.exports = {
  HTTPError: HTTPError,
  NotFound: NotFound
};
