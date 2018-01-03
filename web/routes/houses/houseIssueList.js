'use strict'

const House = require('../../../models/house');

function houseIssueList (req, res) {
  House.findWithIssues(req, res);
}

module.exports = houseIssueList;
