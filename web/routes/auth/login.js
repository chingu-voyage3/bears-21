'use strict'

const passport = require('passport');

function login (req, res, next) {
  passport.authenticate('local', { failureRedirect: '/login' }, function(err, user, info) {
		console.log(req.user);
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info.message });
    }
    res.sendStatus(200);
  })(req, res, next);
}

module.exports = login;
