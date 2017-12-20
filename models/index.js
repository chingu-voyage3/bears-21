const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const house = require('./house');
const user = require('./user');
const config = require('./config');

const db = {
  init,
  close
};

async function init () {
  await mongoose.connect(config.uri, { useMongoClient: true });
}

async function close () {
  await mongoose.connection.close();
}

module.exports = {
  db,
  house,
  user
};
