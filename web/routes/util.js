'use strict'
const fs = require( 'fs');

const readDirectory = ( dir) => {
  return new Promise( (resolve, reject) => {
    fs.readdir( dir, (err, res) => {
      if( err){
        reject( err);
      } else {
        resolve( res);
      }
    });
  });
};

function createMissingDir( dir) {
  // 484 == 0744
  fs.mkdirSync( dir, 484);
}

module.exports = {
  getDirPicCount: async function( dir) {
    let image_count = -1;
    try {
      const listing = await readDirectory( dir);
      image_count = listing.length;
    } catch( e) {
      if( e.code === "ENOENT") {
        console.log( "creating missing directory:", dir)
        try {
          createMissingDir( dir);
          image_count = 0;
        } catch( e) {
          // we can't get error EEXIST here so bail
          console.error( "mkdirSync failed:", e);
        }
      } else {
        console.error( "directory count failed:", e);
      }
    }
    return image_count;
  },
  makeUrlsFromBlobs: function( parent_id, current_image_count, blobs) {
    const new_image_urls = [];
    if( typeof parent_id !== "string") {
      console.error( "makeUrlsFromBlobs parent_id missing");
      return new_image_urls;
    }
    if( typeof current_image_count !== "number") {
      console.error( "makeUrlsFromBlobs current_image_count missing");
      return new_image_urls;
    }
    if( !Array.isArray( blobs)) {
      console.error( "makeUrlsFromBlobs blobs param invalid");
      return new_image_urls;
    }
    let image_count = current_image_count;
    blobs.forEach( (fd) => {
      const bits = fd.originalname.match( /.*\.(.*)/);
      const ext = bits[bits.length-1];
      const np = `${process.env.IMAGE_BASE_DIR}/${parent_id}/pic${image_count}.${ext}`;
      fs.rename( fd.path, np, err => {
        console.log( `move [${fd.path}] to [${np}] status:`, err);
      });
      const url = `/images/${parent_id}/pic${image_count}.${ext}`;
      new_image_urls.push( url);
      image_count += 1;
    });
    return new_image_urls;
  },
  // return an array for a string, array or undefined
  makeArrayFromBody: function( value) {
    let ret = [];
    switch( typeof value) {
      case "string":
        ret = [value];
        break;
      case "object":
        ret = value;
        break;
    }
    return ret;
  }
};
