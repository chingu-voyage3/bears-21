'use strict'

const User = require('../../../models/user');

async function getDetail( req, res) {
  const user = await User.findById( req.user._id);
  res.json({
    name: user.name,
    avatar: user.avatar,
    email: user.email
  });
}

module.exports = getDetail;
