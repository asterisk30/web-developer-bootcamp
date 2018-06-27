var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// postSchema has to be defined before being embedded in userSchema
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);

var newUser = new User({
  email: 'johndoe@gmail.com',
  name: 'John Doe'
});

// newUser.posts.push({
//   title: 'I am here to make fun',
//   content: 'Here is lots of fun'
// })

// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(user);
//   }
// })

// Post.create({
//   title: 'Comment on Germany vs Korea game',
//   content: 'German lost a lot'
// }, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

User.findOne({name: 'John Doe'}, function(err, user) {
  if (err) {
    console.log(err + 'on finding...');
  } else {
    user.posts.push({
      title: 'This is testing for call back',
      content: 'Test test test'
    });
    // nested callbacks
    user.save(function(err, user) {
      if (err) {
        console.log(err + 'on saving...');
      } else {
        console.log(user);
      }
    })
  }
})