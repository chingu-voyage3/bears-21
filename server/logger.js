'use strict';

const chalk = require('chalk');

const divider = chalk.gray('\n-----------------------------------');

/* eslint-disable no-console */

module.exports = {
  info: (msg) => {
    console.log(chalk.green(msg));
  },
  error: (err) => {
    console.log(chalk.red(err));
  },
  appStarted: (host, port) => {
    console.log(`🌎 Server started ! ${chalk.green('✓')}`);
    console.log(`
      ${chalk.bold('Access URL:')}${divider}
      ${chalk.magenta(`http://${host}:${port}`)}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}`);
  }
};
