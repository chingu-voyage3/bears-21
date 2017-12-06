'use strict';

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Oops! Internal Server Error.');
}

module.exports = {
  errorHandler
};
