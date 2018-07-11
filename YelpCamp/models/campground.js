var mongoose = require('mongoose');

// schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// compile the schema into a model
module.exports = mongoose.model('Campgound', campgroundSchema);
