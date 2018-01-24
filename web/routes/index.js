'use strict'

const { Router } = require('express');
const multer = require('multer');
const upload = multer({ dest: process.env.IMAGE_UPLOAD_DIR});

const auth = require('./auth');
const houses = require('./houses');
const users = require('./users');
const issues = require('./issues');
const images = require('./images');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', houses.list);
router.post('/api/v1/houses', auth.isLoggedIn, catchAsyncErrors(houses.create));

router.get( '/api/v1/house-issues', auth.isLoggedIn, houses.houseIssueList);

// NOTE: this is singular, house
router.delete('/api/v1/house', auth.isLoggedIn, catchAsyncErrors(houses.delete));

router.post('/api/v1/house', auth.isLoggedIn, upload.array('blobs', 3), catchAsyncErrors( houses.upsert));
router.post('/api/v1/issue', auth.isLoggedIn, upload.array('blobs', 3), catchAsyncErrors( issues.upsert));

// NOTE: no auth required
router.get('/api/v1/image/:id', catchAsyncErrors( images.grab));

router.get('/api/v1/user', auth.isLoggedIn, catchAsyncErrors( users.getDetail));

/**
 * 1. Validate the registration data
 * 2. Register the user
 * 3. Log them in
 */
router.post('/api/v1/register',
  users.register.validateRegister,
  catchAsyncErrors(users.register.register),
  auth.login
);

router.post('/api/v1/login', auth.login);
router.get('/api/v1/logout', auth.logout);

module.exports = router;
