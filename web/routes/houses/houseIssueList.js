'use strict'

const House = require('../../../models/house');

async function houseIssueList (req, res) {
  const houses = await House.findWithIssues();
  res.json({ houses });
}

module.exports = houseIssueList;
