var express = require('express'),
    router = express.Router(),
    Campgound = require('../models/campground'),
    Comment = require('../models/comment');

// =====================================
// Comment routes
// =====================================
router.post('/campground/:id', isLoggedIn, function(req, res) {
  // look up campground using id
  Campgound.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect('/campground');
    } else {
      // create new comment in DB
      let newcomment = req.body.comment;
      let author = {};
      author.id = req.user._id;
      author.username = req.user.username;
      newcomment.author = author;
      Comment.create(newcomment, function(err, newcomment) {
        if (err) {
          console.log(err);
          res.redirect('/campground');
        } else {
          // connect comment to campground
          campground.comments.push(newcomment);
          campground.save();
          // redirect to show page
          res.redirect(302, '/campground/' + campground._id);
        }
      });
    }
  })
})

// middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

module.exports = router;