'use strict'

const passport = require('passport');

module.exports = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/'
});
