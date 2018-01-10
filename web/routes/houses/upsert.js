'use strict'
const util = require( '../util');
const House = require( '../../../models/house');

async function upsert( req, res) {
  console.log( "text fields:", req.body);
  console.log( "files:", req.files);
  const new_house = req.body._id?false:true;
  let house;
  if( new_house) {
    house = new House();
  } else {
    house = await House.findById( req.body._id);
  }
  // set new values
  house.owner = req.user._id;
  house.title = req.body.title;
  house.description = req.body.description;
  const {street, postCode} = req.body;
  // we can save image urls with the basic object info
  house.location = {street, postCode};
  // issues and images can be undefined, string or array, turn in an array
  house.issues = util.makeArrayFromBody( req.body.issues);
  house.images = util.makeArrayFromBody( req.body.url);
  // save the text info to get the _id so we can link blob pics to house dir
  try {
    await house.save();
  } catch(e) {
    console.error( "house upsert save failed:", e);
    res.json( {success:false, message: e});
    return;
  }

  // now we have house _id sort the blob objects
  // we need the number of pics in the directory
  const house_dir = `${process.env.IMAGE_BASE_DIR}/${house._id}`;
  let image_count = await util.getDirPicCount( house_dir);
  if( image_count === -1) {
    res.json( {success:false, message: "House image count failed"});
    return;
  }
  const new_image_urls = util.makeUrlsFromBlobs( house._id, image_count, req.files);
  house.images = house.images.concat( new_image_urls);
  // save house with urls to uploaded blob images
  await house.save();
  res.json( {success:true, house})
}

module.exports = upsert;
