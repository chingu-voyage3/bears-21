'use strict';

const { PORT: port = '3001' } = process.env;

module.exports = {
  port: parseInt(port, 10)
};

