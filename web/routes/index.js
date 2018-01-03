'use strict'

const { Router } = require('express');
const auth = require('./auth');
const houses = require('./houses');
const users = require('./users');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', houses.list);
router.post('/api/v1/houses', auth.isLoggedIn, catchAsyncErrors(houses.create));

// TODO: should be logged in
router.get( '/api/v1/house-issues', houses.houseIssueList);

/**
 * 1. Validate the registration data
 * 2. Register the user
 * 3. Log them in
 */
router.post('/api/v1/register',
  users.validateRegister,
  catchAsyncErrors(users.register),
  auth.login
);

router.post('/api/v1/login', auth.login);
router.get('/api/v1/logout', auth.logout);

module.exports = router;
