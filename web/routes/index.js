'use strict';

const { Router } = require('express');
const multer = require('multer');
const upload = multer({ dest: process.env.IMAGE_UPLOAD_DIR });

const auth = require('./auth');
const houses = require('./houses');
const users = require('./users');
const issues = require('./issues');
const images = require('./images');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', houses.list);
router.post('/api/v1/houses', auth.isLoggedIn, catchAsyncErrors(houses.create));

router.get('/api/v1/house-issues', auth.isLoggedIn, houses.houseIssueList);

// NOTE: this is singular, house
router.delete(
  '/api/v1/house',
  auth.isLoggedIn,
  catchAsyncErrors(houses.delete)
);
router.post(
  '/api/v1/house/rating',
  auth.isLoggedIn,
  catchAsyncErrors(houses.rate)
);

router.post(
  '/api/v1/house',
  auth.isLoggedIn,
  upload.array('blobs', 3),
  catchAsyncErrors(houses.upsert)
);
router.post(
  '/api/v1/issue',
  auth.isLoggedIn,
  upload.array('blobs', 3),
  catchAsyncErrors(issues.upsert)
);

// NOTE: no auth required
router.get('/api/v1/image/:id', catchAsyncErrors(images.grab));

router.get('/api/v1/user/:id*?', auth.isLoggedIn, catchAsyncErrors(users.get));
router.post(
  '/api/v1/user',
  auth.isLoggedIn,
  upload.array('blobs', 1),
  catchAsyncErrors(users.update)
);

/**
 * 1. Validate the registration data
 * 2. Register the user
 * 3. Log them in
 */
router.post('/api/v1/register', catchAsyncErrors(users.create), auth.login);

router.get(
  '/api/v1/me',
  catchAsyncErrors(async function me(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.json({ id: null });
    }
    const { user } = req;
    res.json({ id: user._id, email: user.email });
  })
);

router.post('/api/v1/login', auth.login);
router.post('/api/v1/logout', auth.logout);

module.exports = router;
