'use strict';

const { PORT: port = '3000' } = process.env;

module.exports = {
  port: parseInt(port, 10)
};
