'use strict'

const House = require('../../../models/house');

async function houseIssueList (req, res) {
  const houses = await House.findWithIssues(req);
  res.json({ houses });
}

module.exports = houseIssueList;
