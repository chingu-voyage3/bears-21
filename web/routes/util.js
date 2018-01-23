'use strict'
const fs = require('fs');
const Image = require('../../models/image');
const logger = require('../logger');

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
        logger.info( `creating missing directory:${dir}`)
        try {
          createMissingDir( dir);
          image_count = 0;
        } catch( e) {
          // we can't get error EEXIST here so bail
          logger.error( `mkdirSync failed:${e}`);
        }
      } else {
        logger.error( `directory count failed:${e}`);
      }
    }
    return image_count;
  },
  makeUrlsFromBlobs: function( parent_id, current_image_count, blobs) {
    const new_image_urls = [];
    if( typeof parent_id !== "string") {
      logger.error( "makeUrlsFromBlobs parent_id missing");
      return new_image_urls;
    }
    if( typeof current_image_count !== "number") {
      logger.error( "makeUrlsFromBlobs current_image_count missing");
      return new_image_urls;
    }
    if( !Array.isArray( blobs)) {
      logger.error( "makeUrlsFromBlobs blobs param invalid");
      return new_image_urls;
    }
    let image_count = current_image_count;
    blobs.forEach( (fd) => {
      const bits = fd.originalname.match( /.*\.(.*)/);
      const ext = bits[bits.length-1];
      const np = `${process.env.IMAGE_BASE_DIR}/${parent_id}/pic${image_count}.${ext}`;
      fs.rename( fd.path, np, err => {
        logger.info( `moved [${fd.path}] to [${np}] status:${err}`);
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
    if( Array.isArray( value)) {
      ret = value;
    } else if( typeof value === "string") {
      ret = [value];
    }
    return ret;
  },
  saveBlobs: async function( blobs) {
    let ret = []; // blobs.map( async (fd) => {
    for( let i=0; i<blobs.length; i++){
      const fd = blobs[i];
      const data = fs.readFileSync(fd.path);
      const image = new Image( {
        data, contentType: fd.mimetype
      });
      await image.save();
      ret.push( image._id);
    }
    logger.info( `save blobs returning images ids:${ret}`);
    return ret;
  }
};
