'use strict';

const boom = require('boom');

function catchAsyncErrors (middleware) {
  console.log('In Catch Async');
  return (req, res, next) => Promise.resolve(middleware(req, res, next))
    .catch(err => {
      console.log(err);
      if (err.isJoi) {
        const message = err.details.map(detail => detail.message).join(', ');
        return next(boom.badRequest(message));
      }
      if (!err.isBoom) {
        return next(boom.badImplementation(err));
      }
      next(err);
    });
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
