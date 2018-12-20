'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../models/user');

function init() {
  passport.serializeUser(function(user, done) {
    console.log('Serialize', user);
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    console.log('DeSerialize', user);
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      function(email, password, done) {
        User.findOne({ email }, async function(err, user) {
          if (err) {
            console.error(err);
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          const isAuthed = await user.validatePassword(password);
          if (!isAuthed) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    )
  );
}

module.exports = {
  init,
  isLoggedIn: require('./isLoggedIn'),
  login: require('./login'),
  logout: require('./logout')
};
