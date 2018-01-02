'use strict'

const passport = require('passport');

function login (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info.message });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.sendStatus(200);
    });
  })(req, res, next);
}

module.exports = login;
