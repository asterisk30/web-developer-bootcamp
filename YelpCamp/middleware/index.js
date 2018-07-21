var middlewareObj = {},
    Campgound = require('../models/campground'),
    Comment = require('../models/comment');


middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('red', 'You need to log in to proceed.');
    res.redirect('/login');
  }
};

middlewareObj.canEditCamp = function(req, res, next) {
  if (req.isAuthenticated()) {
    Campgound.findById(req.params.id, function(err, foundCamp) {
      if (err) {
        res.render('error', {error: err});
      } else {
        if (foundCamp.author.id.equals(req.user._id)) {
          return next();
        } else {
          req.flash('red', 'Permission Denied. Please contact admin.');
          res.redirect('/campground/' + req.params.id);
        }
      }
    })
  } else{
    req.flash('red', 'You need to log in to proceed.');
    res.redirect('/login');
  }
};

middlewareObj.canEditComment = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if (err) {
        res.render('error', {error: err});
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          return next();
        } else {
          req.flash('red', 'Permission Denied. Please contact admin.');
          res.redirect('/campground/' + req.params.id);
        }
      }
    })
  } else{
    req.flash('red', 'You need to log in to proceed.');
    res.redirect('/login');
  }
};


module.exports = middlewareObj;