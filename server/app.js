'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');

const routes = require('./routes');
const { errorHandler } = require('./utils');

const app = express();

app.set('view engine', 'pug');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(routes);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.send('Hello world');
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.use(errorHandler);

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app);
