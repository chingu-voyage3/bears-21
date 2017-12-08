const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');

const houseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  postCode: String
});

houseSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('House', houseSchema);
