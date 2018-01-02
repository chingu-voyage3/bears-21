const passport = require('passport');
const User = require('../../models/user');

passport.use(User.createStrategy());

console.log(User.serializeUser.toString())
console.log(User.deserializeUser.toString())
User.deserializeUser = function () {
  var self = this;

  console.log('Username>>>>>>');
  return function(username, cb) {
    console.log('Username>>>>>>', username);
    self.findByUsername(username, cb);
  };
};
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
