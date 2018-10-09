const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  active: Boolean,
  email: String,
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  avatar: String,
  password: String
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    next();
  });
});


module.exports = mongoose.model('User', userSchema);
