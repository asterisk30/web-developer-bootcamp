// require mongoose
var mongoose = require('mongoose');

// schema
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// model
var User = mongoose.model('User', userSchema);

// export (similar as function output)
module.exports = User;