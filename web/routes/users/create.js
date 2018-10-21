'use strict';

const User = require('../../../models/user');
const boom = require('boom');
const joi = require('joi');

const registerSchema = joi
  .object({
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required().strict(),
    confirmPassword: joi.string().valid(joi.ref('password')).required().strict(),
    option: joi.string().required().strict()
  });

async function isEmailTaken(email) {
  let result = true;
  const user = await User.findOne({ email });
  if (!user) {
    result = false;
  }
  return result;
}

async function run(req, res, next) {
  const account = joi.attempt(req.body, registerSchema);

  const { email } = account;
  const emailTaken = await isEmailTaken(email);
  if (emailTaken) {
    throw boom.conflict('Email is already taken.');
  };

  let user;
  try {
    // TODO(vpoddar): Handle options
    delete req.body.option;
    user = new User(req.body);
    user = await user.save();
  } catch (err) {
    console.error(err);
    throw boom.badImplementation();
  }
  res.status(201).json({
    id: user._id,
    email: user.email,
    avatar: user.avatar
  });
}

module.exports = run;
