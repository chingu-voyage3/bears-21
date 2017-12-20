'use strict'

const { Router } = require('express');
const auth = require('./auth');
const houses = require('./houses');
const users = require('./users');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', catchAsyncErrors(houses.list));
router.post('/api/v1/houses', catchAsyncErrors(houses.create));
// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post('/register',
  users.validateRegister,
  // we need to know about errors if
  // validation will be passed, but registration
  // will be failed in some reasons, e.g. second
  // registration with same email
  catchAsyncErrors(users.register),
  auth.login
);

module.exports = router;
