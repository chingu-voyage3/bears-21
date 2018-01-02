'use strict'

const passport = require('passport');

function isLoggedIn (req, res, next) {
  // first check if the user is authenticated
  console.log('Checking is logged in==============', req.user);
  if (req.isAuthenticated()) {
    return next(); // carry on! They are logged in!
  }
  res.sendStatus(401);
}

module.exports = isLoggedIn;
