var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo2');

var Post = require('./models/post');
var User = require('./models/user');


var newPost = new Post({
  title: 'How to make dough? Pt5',
  content: 'let it sit for a 5 seconds'
});

newPost.save(function(err, post) {
  if (err) {
    console.log(err + 'on saving...');
  } else {
    User.findOne({email: 'Johndoe2@123.com'}, function(err, foundUser) {
      if (err) {
        console.log(err + 'on finding...')
      } else {
        foundUser.posts.push(post);
        foundUser.save(function(err, data) {
          if (err) {
            console.log(err + 'on saving user...')
          } else {
            // find user
            // find all posts under the user

            User.findOne({email: 'Johndoe2@123.com'}).populate('posts').exec(function(err, user) {
              if (err) {
                console.log(err);
              } else {
                user.posts.forEach(item => {
                  console.log('===================');
                  console.log(item.title);
                  console.log('===================');
                })
              }
            })
          }
        })
      }
    })
  }
})



