'use strict'

// use different env vars for the tests!
require('dotenv').config({ path: '.env.test' })
const chai = require('chai');
const app = require('../web');

before(async () => {
  await app.init();
});

after(async () => {
  await app.stop();
});

