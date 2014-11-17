var crypto = require('crypto');

function User(id, fields) {
  this.id = id;
  this.fields = fields;
  this.db = require('./db');
}

User.prototype = {
  hashPassword: function(text) {
    var shasum = crypto.createHash('sha1');
    shasum.update(text);
    return shasum.digest('hex');
  },

  save: function(cb) {
    this.db.hmset('user:' + this.id, 'fields', JSON.stringify(this.fields), cb)
  },

  load: function(cb) {
    this.db.hmget('user:' + this.id, 'fields', function(err, fields) {
      this.fields = JSON.parse(fields);
      cb(err, this);
    }.bind(this));
  },

  signIn: function(password, cb) {
    var hashedPassword = this.hashPassword(password);
    this.load(function(err) {
      if (err) {
        cb(err);
      } else {
        cb(null, this.fields.hashedPassword === hashedPassword);
      }
    }.bind(this));
  }
};

module.exports = User;
