'use strict';
const util = require('../util');
const House = require('../../../models/house');
const logger = require('../../logger');

async function upsert(req, res) {
  logger.info(`text fields:${JSON.stringify(req.body)}`);
  logger.info(`files:${JSON.stringify(req.files)}`);
  const new_house = req.body._id ? false : true;
  let house;
  if (new_house) {
    house = new House();
  } else {
    house = await House.findById(req.body._id);
  }
  // set new values
  house.owner = req.user._id;
  house.title = req.body.title;
  house.description = req.body.description;
  const { street, postCode } = req.body;
  house.location = { street, postCode };
  // issues and images can be undefined, string or array, turn into an array
  house.issues = util.makeArrayFromBody(req.body.issues);
  house.images = util.makeArrayFromBody(req.body.url);
  // now save any blob images
  const image_ids = await util.saveBlobs(req.files);
  house.images = house.images.concat(image_ids);

  await house.save();
  res.json({ success: true, house });
}

module.exports = upsert;
