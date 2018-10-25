'use strict';
const House = require('../../../models/house');

async function deleteHouse(req, res) {
  const house = await House.findByIdAndUpdate(req.body.house_id, {
    $set: { active: false }
  });
  res.json({ success: true, house_id: house._id });
}

module.exports = deleteHouse;
