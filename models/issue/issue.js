const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('slug');
mongoose.Promise = global.Promise;

const issueSchema = new Schema({
  status: String,
  title: {
    type: String,
    trim: true,
    required: "title is required"
  },
  description: {
    type: String,
    trim: true
  },
  slug: String,
  created: {
    type: Date,
    default: Date.now
  },
  type: String,
  priority: Number,
  images: [{type: String}]
});

issueSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

module.exports = mongoose.model('Issue', issueSchema);
