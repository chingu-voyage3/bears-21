'use strict';

const logger = require('./logger');

function catchAsyncErrors (middleware) {
  return (req, res, next) => Promise.resolve(middleware(req, res, next)).catch(next);
}

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500);
  res.json({ error: err });
}

module.exports = {
  catchAsyncErrors,
  errorHandler
};
