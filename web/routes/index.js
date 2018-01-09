'use strict'

const { Router } = require('express');
const multer = require('multer');
const upload = multer({ dest: process.env.IMAGE_UPLOAD_DIR});

const auth = require('./auth');
const houses = require('./houses');
const users = require('./users');
const issues = require('./issues');
const { catchAsyncErrors } = require('../utils');
const images = require('./images');

const router = new Router();

router.get('/api/v1/houses', houses.list);
router.post('/api/v1/houses', auth.isLoggedIn, catchAsyncErrors(houses.create));

router.get( '/api/v1/house-issues', auth.isLoggedIn, houses.houseIssueList);

router.post('/api/v1/issues', auth.isLoggedIn, catchAsyncErrors( issues.upsert));

router.post('/api/v1/images', upload.array( 'pic', 3), images.upload);

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
