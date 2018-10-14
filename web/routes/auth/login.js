'use strict'

const passport = require('passport');
const boom = require('boom');

function login (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      throw boom.badImplementation();
    }
    if (!user) {
      throw boom.unauthorized('Invalid email or password.');
    }
    req.logIn(user, function(err) {
      if (err) {
        throw boom.badImplementation();
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
