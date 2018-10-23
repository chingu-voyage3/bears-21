'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config');

async function init() {
  await mongoose.connect(config.uri);
}

async function close() {
  await mongoose.connection.close();
}

module.exports = {
  init,
  close
};
