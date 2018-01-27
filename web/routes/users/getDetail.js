'use strict'

const User = require('../../../models/user');

async function getDetail( req, res) {
  const user_id = req.params.id || req.user._id;
  const user = await User.findById( user_id);
  console.log( "user id:", user._id);
  res.json({
    _id: user._id,
    name: user.name,
    avatar: user.avatar,
    email: user.email
  });
}

module.exports = getDetail;
