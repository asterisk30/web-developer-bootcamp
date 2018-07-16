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
      console.log(err);
      res.render('register');
    } else {
      passport.authenticate('local')(req, res, function() {
        console.log(user);
        res.redirect('/campground');
      })
    }
  })
})

router.get('/login', function(req, res) {
  res.render('login');
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/campground',
  failureRedirect: '/login'
}), function(req, res) {
  res.send('Success Log In');
})

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;