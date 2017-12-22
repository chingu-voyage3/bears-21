'use strict'

function logout (req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = logout;
