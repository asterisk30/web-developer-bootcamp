// include packages
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    User = require('./models/user'),
    seedDB = require('./seeds'),
    app = express();

// include routes
var campgroundRoutes = require('./routes/campground'),
    commentRoutes = require('./routes/comment'),
    indexRoutes = require('./routes/index');


seedDB();
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



// Passport configuration
app.use(require('express-session')({
  secret: 'This is a secret.',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/campground', campgroundRoutes);
app.use(commentRoutes);
app.use(indexRoutes);


app.listen(3000, function() {
  console.log('server is up.')
})