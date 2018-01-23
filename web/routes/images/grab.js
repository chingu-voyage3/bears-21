'use strict'

const Image = require( '../../../models/image');

async function grab( req, res) {
  const image = await Image.findById( req.params.id);
  res.setHeader( 'content-type', image.contentType);
  res.send(image.data);
}

module.exports = grab;
