const passport = require('passport');
const User = require('../../models/user');

passport.use(User.createStrategy());

/*
User.deserializeUser = function () {
  var self = this;
  return function(username, cb) {
    self.findByUsername(username, cb);
  };
};*/
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
