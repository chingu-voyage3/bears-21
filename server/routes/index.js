'use strict'

const { Router } = require('express');
const { auth, house, user } = require('../controllers');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', catchAsyncErrors(house.list));
router.post('/api/v1/houses', catchAsyncErrors(house.create));


// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post('/register',
  user.validateRegister,
  // we need to know about errors if
  // validation will be passed, but registration
  // will be failed in some reasons, e.g. second
  // registration with same email
  catchAsyncErrors(user.register),
  auth.login
);

module.exports = router;

