'use strict'

const { Router } = require('express');
const houses = require('./houses');
const { catchAsyncErrors } = require('../utils');

const router = new Router();

router.get('/api/v1/houses', catchAsyncErrors(houses.list));
router.post('/api/v1/houses', catchAsyncErrors(houses.create));

module.exports = router;
