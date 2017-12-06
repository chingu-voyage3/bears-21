'use strict';

const logger = require('./logger');

const errorHandler = (err, req, res) => {
  logger.error(err);
  res.status(500).send('Oops! Internal Server Error.');
}

module.exports = {
  errorHandler
};
