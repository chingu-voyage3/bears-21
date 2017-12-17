const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/'
});

