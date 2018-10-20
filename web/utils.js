'use strict';

const boom = require('boom');

function catchAsyncErrors (middleware) {
  return (req, res, next) => Promise.resolve(middleware(req, res, next))
    .catch(err => {
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
  res.status(500).json({ error: err });
}

module.exports = {
  catchAsyncErrors,
  errorHandler
};
