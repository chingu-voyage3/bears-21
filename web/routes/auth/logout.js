'use strict';

const boom = require('boom');

function logout(req, res) {
  req.logout();
  console.log(req.session.destroy);
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      throw boom.badImplementation();
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged Out' });
  });
}

module.exports = logout;
