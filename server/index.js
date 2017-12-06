'use strict';

const promisify = require('es6-promisify');

const server = require('./server');
const config = require('./config');
const logger = require('./logger');

process.on('SIGTERM', async () => {
  const exitCode = await stop();
  process.exit(exitCode);
});

// do not init the process if a crucial component can not start up
const initServer = promisify(server.listen, server);
async function init () {
  try {
    await initServer(config.port);
  } catch (err) {
    logger.error(`Couldn't init the app: ${err}`);
    // exit code for fatal exception
    process.exit(1);
  }
  logger.appStarted(config.host, config.port);
}

const closeServer = promisify(server.close, server);
async function stop () {
  // start with a normal exit code
  let exitCode = 0;
  try {
    await closeServer();
  } catch (err) {
    logger.error(`Failed to close the server: ${err}`);
    exitCode = 1;
  }
  return exitCode;
}

module.exports = {
  init,
  stop
};
