'use strict'

const { Router } = require('express');
const path = require('path');
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

// NOTE: this is singular, house
router.post('/api/v1/house', upload.array('blobs', 3), catchAsyncErrors( houses.upsert));

// FIXME: serve with  express static
router.get('/images/:parent/:name', ( req, res) => {
  console.log( "image request:", req.params);
  const image_file = path.resolve( __dirname, '..', 'images', req.params.parent, req.params.name);
  res.sendFile( image_file);
});

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
