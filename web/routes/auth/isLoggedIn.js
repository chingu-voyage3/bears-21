'use strict';

function isLoggedIn (req, res, next) {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    return next(); // carry on! They are logged in!
  }
  res.sendStatus(401);
}

module.exports = isLoggedIn;
