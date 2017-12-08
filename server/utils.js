'use strict';

const logger = require('./logger');

function catchAsyncErrors (fn) {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

module.exports = {
  catchAsyncErrors,
  errorHandler
};
