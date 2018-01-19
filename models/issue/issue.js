const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('slug');
mongoose.Promise = global.Promise;

const issueSchema = new Schema({
  status: {
    type: String,
    enum: ['open', 'resolved', 'closed'],
    required: 'status is required'
  },
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
  type: {
    type: String,
    enum: ['type a', 'type b'],
    required: 'type is required'
  },
  priority: {
    type: Number,
    min: 1,
    max: 2
  },
  images: {
    type: [String],
    default: []
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
    required: "house is required"
  }
});

issueSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

module.exports = mongoose.model('Issue', issueSchema);
