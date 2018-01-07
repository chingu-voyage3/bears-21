'use strict'
const Issue = require('../../../models/issue');
const House = require('../../../models/house');

async function upsert( req, res) {
  const new_issue = req.body._id?false:true;
  const issue = new Issue( req.body);
  issue.isNew = new_issue;
  issue.save();
  if( new_issue) {
    const house = await House.findById( req.body.house);
    house.issues.push( issue._id);
    house.save();
  }
  res.json( {issue});
}

module.exports = upsert;
