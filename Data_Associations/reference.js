var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo2');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model('Post', postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

var User = mongoose.model('User', userSchema);

// var newPost = new Post({
//   title: 'How to make dough? Pt3',
//   content: 'let it sit for a while'
// });

// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err + 'on saving...');
//   } else {
//     User.findOne({email: 'Johndoe2@123.com'}, function(err, foundUser) {
//       if (err) {
//         console.log(err + 'on finding...')
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data) {
//           if (err) {
//             console.log(err + 'on saving user...')
//           } else {
//             console.log(data);
//           }
//         })
//       }
//     })
//   }
// })

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

