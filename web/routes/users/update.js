'use strict'
const User = require('../../../models/user');
const util = require('../util');

async function update( req, res) {
  const user = await User.findById( req.user._id);
  const {name, email, avatar} = req.body;
  user.name = name;
  user.email = email;
  if (req.files.length) {
    const image_ids = await util.saveBlobs( req.files);
    user.avatar = image_ids[0];
  } else if( avatar){
    user.avatar = avatar;
  }

  try {
    await user.save();
    console.log( "user updated:", user);
  } catch( e) {
    console.error("user save failed:", e);
    res.json({success: false, message: e});
    return;
  }
  res.json({success: true, user});
}

module.exports = update;
