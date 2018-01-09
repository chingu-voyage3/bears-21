'use strict'
const fs = require( 'fs');
const House = require('../../../models/house');
const Issue = require('../../../models/issue');

async function upload( req, res, next) {
  const {type, parent_id} = req.body;
  console.log( `upload [${type}] _id[${parent_id}]` );
  const base_dir = process.env.IMAGE_BASE_DIR; // "./frontend/public/images/";
  try {
    // 0744 == 484
    fs.mkdirSync( `${base_dir}/${parent_id}`, 484);
  } catch( e) {
    // can ignore exception if dir already exists
    if( e.code !== 'EEXIST') {
      console.error( "makde directory threw:", e);
    }
  }
  let parent;
  switch( type) {
    case "house":
      parent = await House.findById( parent_id);
      break;
    case "issue":
      parent = await Issue.findById( parent_id);
      break;
    default:
      res.json( {success: false, type, message: "unsupported type"});
      return next();
  }
  console.log( `house [${parent._id}]`);
  console.log( `images[${parent.images}]`);
  let parent_image_count = parent.images.length;
  let new_image_urls = [];
  req.files.forEach( (fd) => {
    const bits = fd.originalname.match( /.*\.(.*)/);
    const ext = bits[bits.length-1];
    // console.log( "file extension:", ext);
    // console.log( `pic[${i}] file[${fd.path}]`);
    const np = `${base_dir}/${parent_id}/pic${parent_image_count}.${ext}`;
    // console.log( "new file path:", np);
    console.log( `move [${fd.path}] to [${np}]`);
    fs.rename( fd.path, np, err => {
      console.log( "file moved. status:", err);
    });
    // add url to image on site and collation array for response
    const url = `//images/${parent_id}/pic${parent_image_count}.${ext}`;
    parent.images.push( url);
    new_image_urls.push( url);
    parent_image_count += 1;
  });
  // doh! we don't need to upload url images ... yet
  // Object.keys( req.body).forEach( (key, i) => {
  //   if( key.substr(0,3) === "url") {
  //     console.log( `pic[${i}] key[${key}] url[${req.body[key]}]`);
  //     parent.images.push( req.body[key]);
  //     parent_image_count += 1;
  //   }
  // });
  parent.save();
  res.json( {success: true, [type]:new_image_urls});
}

module.exports = {upload};
