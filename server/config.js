'use strict';

const {
  HOST: host = 'http://localhost',
  PORT: port = '3000',
  DATABASE: database } = process.env;

console.log(database);

module.exports = {
  port: parseInt(port, 10),
  host,
  database
};
