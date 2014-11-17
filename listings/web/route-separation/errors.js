var util = require('util');

function NotFound(message) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.statusCode = 404;
  this.message = message;
  this.name = 'NotFound';
}
util.inherits(NotFound, Error);

module.exports = {
  NotFound: NotFound
};
