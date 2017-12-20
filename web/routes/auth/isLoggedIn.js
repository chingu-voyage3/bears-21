'use strict'

const passport = require('passport');

function isLoggedIn (req, res, next) {
  // first check if the user is authenticated
  if (req.isAuthenticated()) {
    next(); // carry on! They are logged in!
    return;
  }
  res.redirect('/login');
}

module.exports = isLoggedIn;
