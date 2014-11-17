var User = require('./user');
var alex = new User(1, { name: 'Alex' });

alex.save(function(err, reply) {
  if (err) {
    console.error(err);
  }

  var savedUser = new User(1);
  savedUser.load(function(err, reply) {
    if (err) {
      console.error(err);
    }

    console.log(savedUser.fields);
    alex.db.unref();
  });
});
