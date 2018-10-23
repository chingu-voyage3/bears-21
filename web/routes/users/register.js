'use strict'

const promisify = require('es6-promisify');
const User = require('../../../models/user');

exports.validateRegister = (req, res, next) => {
  // Below methods are added to req object by express-validator module
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  if (process.env.NODE_ENV === "development") {
    req.sanitizeBody('email');
  } else {
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
      gmail_remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    });
  }
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    // stop the fn from running
    return res.status(400).json({
      'errors': errors.map(err => err.msg)
    });
  }
  next(); // there were no errors!
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next(); // pass to authController.login
};
