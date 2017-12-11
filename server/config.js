'use strict';

const {
  HOST: host = 'http://localhost',
  PORT: port = '3000',
  DATABASE: database } = process.env;

module.exports = {
  port: parseInt(port, 10),
  host,
  database
};
