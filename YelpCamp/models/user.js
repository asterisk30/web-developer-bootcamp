var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  created: Number,
  updated: Number
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);