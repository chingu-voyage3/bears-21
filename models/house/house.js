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
  issues: {
    type: [{
      type: Schema.Types.ObjectId,
      ref:'Issue'
    }],
    default: []
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  images: {
    type: [String],
    default: []
  },
  ratings: {
    type: [{
      user: { type: Schema.Types.ObjectId, ref: 'User'},
      value: {
        type: Number,
        min: 1,
        max: 5,
        validate: {
          validator: Number.isInteger,
          message: '{VALUE} must be integer one to five'
        }
      }
    }],
    default: []
  },
  active: {type: Boolean, default: true},
},
{ toObject: { virtuals: true }, toJSON: {virtuals: true} });

houseSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slug(this.title);
  next();
});

houseSchema.virtual( 'rating')
.get( function(){
  return calculateRating( this.ratings);
});

const calculateRating = (ratings) => {
    if( ratings.length === 0) return 0;

    const total = ratings.reduce( (acc,cur) => {
      acc[cur.value-1] += 1;
      return acc;
    }, [0,0,0,0,0])
    .reduce( (acc, cur, ndx) => {
      return acc + cur * (ndx+1);
    }, 0);

    return total/ratings.length;
};

houseSchema.statics.findWithIssues = function findWithIssues(req, res) {
  return this.find( { owner: req.user._id, active: true})
  .populate( "issues")
  .exec( function( err, docs) {
    if( err || !docs || docs.length === 0){
      // eslint-disable-next-line no-console
      console.error( "house issues findWithIssues failed:", err);
      res.json( []);
    } else {
      const ret = docs.map( doc => {
        const {title, slug, description, created,
          location, issues, owner, images} = doc;
        const r = { title, slug, description, created,
          location, issues, owner, images};
        r.rating = calculateRating( doc.ratings);
        return r;
      });
      res.json( ret);
    }
  });
};

module.exports = mongoose.model('House', houseSchema);
