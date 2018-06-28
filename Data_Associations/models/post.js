// require mongoose
var mongoose = require('mongoose');

// schema
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// model
var Post = mongoose.model('Post', postSchema);

// export (similar as function output)
module.exports = Post;
