var errors = require('./errors');

function Collection() {
  this.store = {};
  this.lastId = 0;
}

Collection.prototype.seed = function(obj, cb) {
  this.store = obj;
  cb();
};

Collection.prototype.findAll = function(cb) {
  var items = [];

  for (var id in this.store) {
    items.push(this.store[id]);
  }

  cb(null, items);
};

Collection.prototype.create = function(obj, cb) {
  this.lastId++;
  obj.id = this.lastId;
  this.store[this.lastId] = obj;
  cb(null, obj);
};

Collection.prototype.update = function(id, obj, cb) {
  this.find(id, function(err, item) {
    if (err) return cb(err);

    for (var key in obj) {
      item[key] = obj[key];
    }

    cb(null, item);
  });
};

Collection.prototype.find = function(id, cb) {
  id = parseInt(id, 10);
  var obj = this.store[id];
  cb(null, obj);
};

module.exports.notes = new Collection('notes');
