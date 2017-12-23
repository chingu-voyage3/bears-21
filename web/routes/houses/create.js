'use strict'

const House = require('../../../models/house');

async function create (req, res) {
  const house = new House(req.body);
  await house.save();
  res.json({ house });
}

module.exports = create;
