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
  var newUser = new User({username: req.body.username});
  if (req.body.invitationCode === process.env.ADMIN_CODE) {
    newUser.isAdmin = true;
  }
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      req.flash('red', err.message);
      res.redirect('/signup');
    } else {
      passport.authenticate('local')(req, res, function() {
        var showname;
        if (newUser.isAdmin === false) {
          showname = req.body.username;
        } else {
          showname = 'Admin';
        }
        req.flash('green', 'Signed up successfully. Welcome ' + showname + '!');
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
      var showname;
      if (user.isAdmin === false) {
        showname = req.user.username;
      } else {
        showname = 'Admin';
      }
      req.flash('green', 'Logged in successfully. Welcome ' + showname + '!');
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