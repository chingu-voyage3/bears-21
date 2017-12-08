const mongoose = require('mongoose');
const House = mongoose.model('House');

exports.create = async (req, res) => {
  const house = new House(req.body);
  await house.save();
  res.send({ house });
};

exports.list = async (req, res) => {
  const houses = await House.find();
  res.send({ houses });
};

