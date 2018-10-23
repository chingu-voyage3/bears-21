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
const fs = require( 'fs');
const config = require('./config');
const logger = require('./logger');
const { db } = require('../models');
const app = require('./app');

// do not init the process if a crucial component can not start up
const initDb = db.init;
const initServer = promisify(app.listen, app);
async function init () {
  const upload_dir = process.env.IMAGE_UPLOAD_DIR;
  // check image upload dir
  if( fs.existsSync( upload_dir)) {
    logger.info("image upload directory present");
  } else {
    try {
      fs.mkdirSync( upload_dir, 484);
      logger.info( `created image upload directory: ${upload_dir}`);
    } catch( err) {
      // we can't get error EEXIST here so bail
      logger.error(`Couldn't init file upload dir: ${err}`);
      process.exit(1);
    }
  }
  try {
    await initDb();
    logger.info(`Connected to database`);
    await initServer(config.port);
  } catch (err) {
    logger.error(`Couldn't init the app: ${err.message}`);
    // exit code for fatal exception
    process.exit(1);
  }
  logger.appStarted(app.address().address, app.address().port);
}

const closeDb = db.close;
const closeServer = promisify(app.close, app);
async function stop () {
  // start with a normal exit code
  let exitCode = 0;
  try {
    await closeServer();
  } catch (err) {
    logger.error(`Failed to close the app: ${err.message}`);
    exitCode = 1;
  }

  try {
    await closeDb();
    logger.info(`Closed database connection`);
  } catch (err) {
    logger.error(`Failed to close database: ${err.message}`);
    exitCode = 1;
  }
  return exitCode;
}

module.exports = {
  init,
  stop
};
