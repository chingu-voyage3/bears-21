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

module.exports = {
  getDirPicCount: async function( dir) {
    let image_count = -1;
    try {
      const listing = await readDirectory( dir);
      image_count = listing.length;
    } catch( e) {
      console.log( "failed to read directory:", e);
      if( e.code === "ENOENT") {
        console.log( "creating missing directory:", dir)
        // create missing directory
        try {
          fs.mkdirSync( dir, 484);
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
  }
};
