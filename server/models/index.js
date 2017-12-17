const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const house = require('./house');
const user  = require('./user');

function init (uri) {
  return mongoose.connect(uri, { useMongoClient: true });
}

function close () {
  return mongoose.connection.close();
}

module.exports = {
  init,
  close,
  house,
  user
};
