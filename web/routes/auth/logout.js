'use strict';

const boom = require('boom');

function logout(req, res) {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      throw boom.badImplementation();
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged Out' });
  });
}

module.exports = logout;
