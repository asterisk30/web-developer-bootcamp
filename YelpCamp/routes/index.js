var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');

// =====================================
// landing page route
// =====================================
router.get('/', function(req, res) {
  res.render('landing');
})

// =====================================
// Auth routes
// =====================================
router.get('/signup', function(req, res) {
  res.render('register');
})

router.post('/signup', function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      req.flash('red', err.message);
      res.redirect('/signup');
    } else {
      passport.authenticate('local')(req, res, function() {
        req.flash('green', 'Signed up successfully. Welcome ' + req.body.username + '!');
        res.redirect('/campground');
      })
    }
  })
})

router.get('/login', function(req, res) {
  res.render('login');
})

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      req.flash('red', err);
      res.redirect('/login');
    }
    if (!user) {
      req.flash('red', 'Invalid username or password.');
      res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) {
        req.flash('red', 'Oops login failed, please come back later.');
        res.redirect('/login');
      }
      req.flash('green', 'Logged in successfully. Welcome ' + req.user.username + '!');
      res.redirect('/campground');
    });
  })(req, res, next);
})



router.get('/logout', function(req, res) {
  let user = req.user.username;
  req.logout();
  req.flash('green', ' Logged out successfully. See you next time ' + user + '!');
  res.redirect('/campground');
})

module.exports = router;