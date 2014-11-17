function User(fields) {
  this.name = fields.name;
  this.email = fields.email;
}

User.prototype.save = function(cb) {
  cb(null);
};

module.exports = User;
