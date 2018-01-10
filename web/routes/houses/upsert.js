'use strict'
const fs = require( 'fs');
const House = require( '../../../models/house');

const readDirectory = ( dir) => {
  return new Promise( (resolve, reject) => {
    fs.readdir( dir, (err, res) => {
      if( err){
        reject( err);
      } else {
        resolve( res);
      }
    })
  });
};

async function upsert( req, res) {
  console.log( "text fields:", req.body);
  console.log( "files:", req.files);
  const new_house = req.body._id?fase:true;
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
  house.location = {street, postCode};
  house.issues = req.body.issues;
  // we can save image urls with the basic object info
  switch( typeof req.body.url) {
    case "string":
      house.images = [req.body.url];
      break;
    case "object":
      house.images = req.body.url;
      break;
    default:
      house.images = [];
      break;
  }
  // save the text info to get the _id so we can link pics to object dir
  try {
    await house.save();
  } catch(e) {
    console.error( "house upsert save failed:", e);
    res.json( {success:false, message: e});
    return;
  }

  // now we have house _id sort the blob objects
  // we need the number of pics in the directory
  let image_count = 0
  const house_dir = `${process.env.IMAGE_BASE_DIR}/${house._id}`;
  try {
    const listing = await readDirectory( house_dir);
    image_count = listing.length;
  } catch( e) {
    console.log( "failed to read directory:", e);
    if( e.code === "ENOENT") {
      console.log( "creating missing directory:", house_dir)
      // create missing directory
      try {
        fs.mkdirSync( house_dir, 484);
      } catch( e) {
        // we can't get error EEXIST here so bail
        console.error( "mkdirSync failed:", e);
        res.json( {success:false, message: e});
        return;
      }
    } else {
      console.error( "directory count failed:", e);
      res.json( {success:false, message: e});
      return;
    }
  }
  const new_image_urls = [];
  req.files.forEach( (fd) => {
    const bits = fd.originalname.match( /.*\.(.*)/);
    const ext = bits[bits.length-1];
    const np = `${process.env.IMAGE_BASE_DIR}/${house._id}/pic${image_count}.${ext}`;
    fs.rename( fd.path, np, err => {
      console.log( `move [${fd.path}] to [${np}] status:`, err);
    });
    const url = `/images/${house._id}/pic${image_count}.${ext}`;
    house.images.push( url);
    image_count += 1;
  });
  // save house with urls to uploaded blob images
  await house.save();
  res.json( {success:true, house})
}

module.exports = upsert;
