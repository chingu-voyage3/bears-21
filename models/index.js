'use strict';

const issue = require('./issue');
const house = require('./house');
const user = require('./user');
const db = require('./db');

module.exports = {
  db,
  issue,
  house,
  user
};
