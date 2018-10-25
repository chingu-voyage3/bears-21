'use strict';
const House = require('../../../models/house');
const logger = require('../../logger');

async function rate(req, res) {
  const { parent_id, value } = req.body;
  logger.info(
    `house rate user[${req.user._id}] value[${value}] parent_id[${parent_id}]`
  );
  const house = await House.findById(parent_id);
  const ratings = house.ratings.filter(
    rating => rating.user.toString() !== req.user._id.toString()
  );
  house.ratings = ratings.concat([{ user: req.user._id, value }]);
  await house.save();
  const new_rating = House.calculateRating(house.ratings);
  res.json({ rating: new_rating });
}

module.exports = rate;
