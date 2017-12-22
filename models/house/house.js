const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('slug');
mongoose.Promise = global.Promise;

const houseSchema = new Schema({
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
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    postCode: {
      type: String,
      required: 'Postcode is required'
    },
    street: {
      type: String,
      required: 'Street is required'
    }
  }
});

houseSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

module.exports = mongoose.model('House', houseSchema);
