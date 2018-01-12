const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const imageSchema = new Schema({
  data: Buffer,
  contentType: String
});

module.exports = mongoose.model('Image', imageSchema);
