var express = require('express'),
    router = express.Router(),
    Campgound = require('../models/campground'),
    Comment = require('../models/comment'),
    middlewareObj = require('../middleware');

// =====================================
// Comment routes
// =====================================

// add new comment
router.post('/campground/:id', middlewareObj.isLoggedIn, function(req, res) {
  // look up campground using id
  Campgound.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      // create new comment in DB
      let newcomment = req.body.comment;
      let author = {
        id: req.user._id,
        username: req.user.username
      };
      newcomment.author = author;
      newcomment.created = Date.now();
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

// update single comment
router.put('/campground/:id/comments/:comment_id', middlewareObj.canEditComment, function(req, res) {
  let newcomment = req.body.comment;
  newcomment.updated = Date.now();
  Comment.findByIdAndUpdate(req.params.comment_id, newcomment, function(err, newComment) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      res.redirect('/campground/' + req.params.id);
    }
  })
})

// delete single comment
router.delete('/campground/:id/comments/:comment_id', middlewareObj.canEditComment, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      res.redirect('/campground/' + req.params.id);
    }
  })
})

module.exports = router;