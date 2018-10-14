'use strict';

function logout (req, res) {
  req.logout();
  res.json({});
}

module.exports = logout;
