'use strict'

const promisify = require('es6-promisify');
const User = require('../../../models/user');
const boom = require('boom');
const joi = require('joi');

const registerSchema = joi
  .object({
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
  })
  .unknown()
  .required();

async function isEmailTaken(email) {
  let result = true;
  const user = await User.findOne({ email });
  if (user) {
    result = false;
  }
  return result;
}

async function run(req, res, next) {
  console.log('In register');
  const account = joi.attempt(req.body, registerSchema);

  const { email } = account;
  const emailTaken = await isEmailTaken(email);
  if (emailTaken) {
    throw boom.conflict('Email is already taken.');
  };

  const user = new User(req.body).save();
}

module.exports = run;
