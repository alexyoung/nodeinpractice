var posts = require('./../models/posts');

module.exports.index = function(req, res) {
  res.render('index', { posts: posts });
};
