const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function init (uri) {
  return mongoose.connect(uri, { useMongoClient: true });
}

function close () {
  return mongoose.connection.close();
}

module.exports = {
  init,
  close,
  house: require('./house')
};
