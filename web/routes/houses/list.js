'use strict'

const House = require('../../../models/house');

async function list (req, res) {
  const houses = await House.find();
  res.json({ houses });
};

module.exports = list;
