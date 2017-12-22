'use strict'

// use different env vars for the tests!
require('dotenv').config({ path: '.env.test' })
const chai = require('chai');
const sinonChai = require('sinon-chai')
const app = require('../web');

chai.use(sinonChai);

before(async () => {
  await app.init();
});

after(async () => {
  await app.stop();
});
