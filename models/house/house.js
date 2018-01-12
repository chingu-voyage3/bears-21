const mongoose = require('mongoose');
const Issue = mongoose.model('Issue').schema;
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
  issues: [{type: Schema.Types.ObjectId, ref: 'Issue'}],
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  images: [String],
  active: {type: Boolean, default: true}
});

houseSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

houseSchema.statics.findWithIssues = function findWithIssues(req, res) {
  return this.find( { owner: req.user._id, active: true})
  .populate( "issues")
  .exec( function( err, docs) {
    if( err || !docs || docs.length === 0){
      // eslint-disable-next-line no-console
      console.error( "house issues findWithIssues failed:", err);
      res.json( []);
    } else {
      res.json( docs);
    }
  });
};

module.exports = mongoose.model('House', houseSchema);
