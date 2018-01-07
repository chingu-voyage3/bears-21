'use strict'
const Issue = require('../../../models/issue');

async function upsert( req, res) {
  const issue = new Issue( req.body);
  await issue.save();
  res.json( {issue});
}

module.exports = upsert;
