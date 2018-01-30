'use strict'
const User = require('../../models/user');

async function update( req, res) {
  const user = User.findById( req.user._id);
  const {name, email, avatar} = req.body;
  user.name = name;
  user.email = email;
  if( avatar)

  try {
    await user.save();
  } catch( e) {
    res.json({success: false, message: e});
    return;
  }
  res.json({success: true, user});
}

module.exports = update;
