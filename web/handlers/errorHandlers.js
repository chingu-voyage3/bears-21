/*
  Development Error Hanlder
  In development we show good error messages so if we hit a syntax error
  or any other previously un-handled error, we can show good info on what happened
*/
function developmentErrors(err, req, res, next) {
  err.stack = err.stack || '';
  let errorDetails;
  if (err.isBoom) {
    const payload = err.output ? err.output.payload : {};
    errorDetails = {
      message: payload.message,
      status: payload.statusCode,
      error: payload.error
    };
    res.status(errorDetails.status);
  } else {
    errorDetails = {
      message: err.message,
      status: err.status,
      stackHighlighted: err.stack.replace(
        /[a-z_-\d]+.js:\d+:\d+/gi,
        '<mark>$&</mark>'
      )
    };
    res.status(err.status || 500);
  }
  res.format({
    // Based on the `Accept` http header
    /* FIXME: this is giving failed to lookup view "error"
    'text/html': () => {
      res.render('error', errorDetails);
    }, // Form Submit, Reload the page
    */
    'application/json': () => res.json(errorDetails) // Ajax call, send JSON back
  });
}

/*
  Production Error Hanlder
  No stacktraces are leaked to user
*/
function productionErrors(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = {
  developmentErrors,
  productionErrors
};
