'use strict';

if (parseFloat(process.versions.node) < 7.6) {
  /* eslint-disable no-console */
  console.log('Please download node version 7.6 or greater.');
  process.exit();
}

process.on('SIGTERM', async () => {
  const exitCode = await stop();
  process.exit(exitCode);
});

const promisify = require('es6-promisify');
const config = require('./config');
const logger = require('./logger');
const { db } = require('../models');
const app = require('./app');

// do not init the process if a crucial component can not start up
const initDb = db.init;
const initServer = promisify(app.listen, app);
async function init () {
  try {
    await initDb();
    logger.info('Connected to database');
    await initServer(config.port);
  } catch (err) {
    logger.error(`Couldn't init the app: ${err}`);
    // exit code for fatal exception
    process.exit(1);
  }
  logger.appStarted(config.host, app.address().port);
}

const closeDb = db.close();
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

  try {
    await closeDb();
    logger.info(`Closed database connection`);
  } catch (err) {
    logger.error(`Failed to close database: ${err.message}`);
    exitCode = 1
  }
  return exitCode;
}

module.exports = {
  init,
  stop
};
