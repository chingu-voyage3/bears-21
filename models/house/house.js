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
  },
  issues: [{type: Schema.Types.ObjectId, ref: 'Issue'}]
});

houseSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

houseSchema.statics.findWithIssues = function findWithIssues(req) {
  // TODO: find by owner
  console.log( "House find issues, owner:", req.user);
  return this.find( {})
  .populate( "issues")
  .exec( function( err, docs) {
    if( err || !docs || docs.length === 0){
      // eslint-disable-next-line no-console
      console.error( "house issues findWithIssues failed:", err);
      return [];
    } else {
      return docs;
    }
  });
};

module.exports = mongoose.model('House', houseSchema);
