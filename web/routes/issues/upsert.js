'use strict'
const util = require( '../util');
const Issue = require('../../../models/issue');
const House = require('../../../models/house');

async function upsert( req, res) {
  const new_issue = req.body._id?false:true;
  let issue;
  if( new_issue) {
    issue = new Issue();
  } else {
    issue = await Issue.findById( req.body._id);
  }
  issue.title = req.body.title;
  issue.description = req.body.description;
  issue.type = req.body.type;
  issue.status = req.body.status;
  issue.priority = req.body.priority;
  issue.house = req.body.house;
  // ok to save image url with basic issue detail
  issue.images = util.makeArrayFromBody( req.body.url);
  // save blobs
  const image_ids = await util.saveBlobs( req.files);
  issue.images = issue.images.concat( image_ids);

  try {
    await issue.save();
  } catch( e) {
    console.error( "issue upsert resave failed:", e);
    res.json( {success: false, message: e});
    return;
  }
  // save the issue owner (house) id for new issues
  if( new_issue) {
    const house = await House.findById( req.body.house);
    house.issues.push( issue._id);
    try {
      await house.save();
    } catch( e) {
      console.error( "issue house id save failed:", e);
      res.json( {success: false, message: e});
      return;
    }
  }
  // now deal with the blobs
  res.json( {success:true, issue});
}

module.exports = upsert;
