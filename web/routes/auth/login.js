'use strict';

const passport = require('passport');
const boom = require('boom');

function login(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      next(boom.badImplementation());
    }
    if (!user) {
      return next(boom.unauthorized('Invalid email or password.'));
    }
    req.logIn(user, function(err) {
      if (err) {
        console.error(err);
        return next(boom.badImplementation());
      }
      res.send({
        id: user._id,
        email: user.email,
        avatar: user.avatar
      });
    });
  })(req, res, next);
}

module.exports = login;
