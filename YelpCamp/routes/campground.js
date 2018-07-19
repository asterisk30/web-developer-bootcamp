var express = require('express'),
    router = express.Router(),
    Campgound = require('../models/campground');

// =====================================
// Campground routes
// =====================================

// index page
router.get('/', function(req, res) {
  // get all campgrounds from DB
  Campgound.find({}, function(err, camp) {
    if(err) {
      console.log(err)
    } else {
      res.render('index', {campground:camp});
    }
  })
})

// create new post
router.post('/', isLoggedIn, function(req, res) {
  // get data from form
  // add data to campground array
  // redirect to campground page
  let name = req.body.name;
  let img = req.body.image;
  let desc = req.body.desc;
  let author = {
    id: req.user._id,
    username: req.user.username
  };
  let created = Date.now();
  let newCamp = {
    name: name,
    image: img,
    description: desc,
    author: author,
    created: created
  };


  // create new campground and save to database
  Campgound.create(newCamp, function(err, newCamp) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      res.redirect('/campground');
    }
  });
})

// new post page
router.get('/new', isLoggedIn, function(req, res) {
  res.render('newcamp');
})

router.get('/:id', function(req, res) {
  // find the campground with provided id
  Campgound.findById(req.params.id).populate('comments').exec( function(err, foundCamp) {
    if (err) {
      console.log(err);
    } else {
      // render show template with that specific campground
      res.render('show', {campground: foundCamp});
    }
  })
})

// edit page
router.get('/:id/edit', isEditAllowed, function(req, res) {
  Campgound.findById(req.params.id, function(err, foundCamp) {
    if (err) {
      res.redirect('/campground');
    } else {
      res.render('edit', {campground: foundCamp});
    }
  })
})

// put route
router.put('/:id', isEditAllowed, function(req, res) {
  let name = req.body.name,
      image = req.body.image,
      desc = req.body.desc;
  let newCamp = {
    name: name,
    image: image,
    description: desc,
    updated: Date.now()
  };
  Campgound.findByIdAndUpdate(req.params.id, newCamp, function(err, updatedCamp) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      res.redirect('/campground/' + updatedCamp._id);
    }
  })
})

// delete post
router.delete('/:id', isEditAllowed, function(req, res) {
  Campgound.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      res.render('error', {error: err});
    } else {
      res.redirect('/campground');
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

// middleware to check if user has authorization to edit/delete
function isEditAllowed(req, res, next) {
  if (req.isAuthenticated()) {
    Campgound.findById(req.params.id, function(err, foundCamp) {
      if (err) {
        res.render('error', {error: err});
      } else {
        if (foundCamp.author.id.equals(req.user._id)) {
          return next()
        } else {
          res.send('Permission Denied. Please contact admin.');
        }
      }
    })
  } else{
    res.redirect('/login');
  }
}

module.exports = router;