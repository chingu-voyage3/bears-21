'use strict';

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

module.exports = {
  host,
  port
};
