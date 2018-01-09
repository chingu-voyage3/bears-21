'use strict'
const fs = require( 'fs');
// const House = require('../../../models/house');
// const Issue = require('../../../models/issue');

function upload( req, res) {
  console.log( "upload parent _id", req.body.parent_id)
  const parent_id = "some_mongo_id";
  const base_dir = "./frontend/public/images/";
  try {
    // 0744 == 484
    fs.mkdirSync( `${base_dir}${parent_id}`, 484, (err) => {
      if( err){
        console.error( "make directory failed:", err);
      }
    });
  } catch( e) {
    console.error( "makde directory threw:", e);
  }
  // FIXME: get this from object.images.length
  let parent_image_count = 0;
  console.log( "file list:", req.files);
  req.files.forEach( (fd) => {
    const bits = fd.originalname.match( /.*\.(.*)/);
    const ext = bits[bits.length-1];
    // console.log( "file extension:", ext);
    // console.log( `pic[${i}] file[${fd.path}]`);
    const np = `${base_dir}${parent_id}/pic${parent_image_count}.${ext}`;
    parent_image_count += 1;
    // console.log( "new file path:", np);
    console.log( `move ${fd.path} to ${np}`);
    fs.rename( fd.path, np, err => {
      console.log( "file moved. status:", err);
    });
  });
  Object.keys( req.body).forEach( (key, i) => {
    if( key !== "parent") {
      console.log( `pic[${i}] key[${key}] url[${req.body[key]}]`);
    }
  });
  res.json( {success:true});
}

module.exports = {upload};
