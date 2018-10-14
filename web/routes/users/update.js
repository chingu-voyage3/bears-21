'use strict';

const User = require('../../../models/user');
const util = require('../util');
const boom = require('boom');
const joi = require('joi');

const updateSchema = joi
  .object({
    id: joi.string().guid({version: 'uuidv4'}).required(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    avatar: joi.string().required(),
    files: joi.any()
  });

async function update(req, res, next) {
  let { id, name, email, avatar, files } = joi.attempt(req.body, updateSchema);
  const user = await User.findById(id);

  if (!user) {
    throw boom.conflict('Invalid user id.');
  }

  if (account.files.length) {
    const image_ids = await util.saveBlobs(files);
    avatar = image_ids[0];
  }
  user.name = name;
  user.email = email;
  user.avatar = avatar;

  await user.save();
  res.json({ ...user });
}

module.exports = update;
