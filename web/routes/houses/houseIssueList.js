'use strict'

const House = require('../../../models/house');

async function houseIssueList (req, res) {
  const houses = await House.findWithIssues(req);
  console.log( "house issues found:", houses);
  res.json({ houses });
}

module.exports = houseIssueList;
