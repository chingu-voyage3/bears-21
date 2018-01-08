'use strict'
const House = require('../../../models/house');

async function create (req, res) {
  const house = new House(req.body);
  if( !house.owner) {
    house.owner = req.user._id;
  }
  await house.save();
  res.json({ house });
}

module.exports = create;
