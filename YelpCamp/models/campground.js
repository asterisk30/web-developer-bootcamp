var mongoose = require('mongoose');

// schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  created: Number,
  updated: Number,
  price: Number,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

// compile the schema into a model
module.exports = mongoose.model('Campground', campgroundSchema);
