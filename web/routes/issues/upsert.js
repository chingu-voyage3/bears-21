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
  try {
    await issue.save();
  } catch( e) {
    console.error( "issue upsert save failed:", e);
    res.json( {success:false, message: e});
    return;
  }
  // now we have the issue id sort the blob images
  // get current number of picture in directory first
  const issue_dir = `${process.env.IMAGE_BASE_DIR}/${issue._id}`;
  let image_count = await util.getDirPicCount( issue_dir);
  if( image_count === -1) {
    res.json( {success: false, message: "Issue image count failed"});
    return;
  }
  const new_image_urls = util.makeUrlsFromBlobs( issue._id, image_count, req.files);
  issue.images = issue.images.concat( new_image_urls);
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
