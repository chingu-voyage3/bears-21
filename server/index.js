'use strict';

if (parseFloat(process.versions.node) < 7.6) {
  console.log('Please download node version 7.6 or greater.');
  process.exit();
}

const promisify = require('es6-promisify');
const mongoose = require('mongoose');
const open = require('open');

require('dotenv').config();

const config = require('./config');
const logger = require('./logger');

mongoose.connect(config.database, { useMongoClient: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.log(`${err.message}`);
});
require('./models');
const app = require('./app');

process.on('SIGTERM', async () => {
  const exitCode = await stop();
  process.exit(exitCode);
});

// do not init the process if a crucial component can not start up
const initServer = promisify(app.listen, app);
async function init () {
  try {
    await initServer(config.port);
  } catch (err) {
    logger.error(`Couldn't init the app: ${err}`);
    // exit code for fatal exception
    process.exit(1);
  }
  logger.appStarted(config.host, app.address().port);
  //open(`${config.host}:${config.port}`);
}

const closeServer = promisify(app.close, app);
async function stop () {
  // start with a normal exit code
  let exitCode = 0;
  try {
    await closeServer();
  } catch (err) {
    logger.error(`Failed to close the app: ${err}`);
    exitCode = 1;
  }
  return exitCode;
}

module.exports = {
  init,
  stop
};
