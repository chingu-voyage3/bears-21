'use strict';

const User = require('../../../models/user');
const joi = require('joi');

const getSchema = joi
  .object({
    id: joi.string().guid({version: 'uuidv4'}).required(),
  });

async function getDetail(req, res) {
  const { id } = joi.attempt(req.params, getSchema);
  const user = await User.findById(id);
  res.json({ ...user });
}

module.exports = getDetail;
