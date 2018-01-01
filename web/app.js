'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const passport = require('passport');
require('./handlers/passport');
const routes = require('./routes');
const { errorHandler } = require('./utils');

const app = express();

app.use(cors());
app.set('view engine', 'pug');
// Middlewares
app.use(morgan('tiny'));
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Exposes a bunch of methods for validating data.
// Used heavily on userController.validateRegister
app.use(expressValidator());
// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

app.use( (req, res, next) => {
  console.log( "request user:", req.user);
  return next();
});

app.use(routes);
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.use(errorHandler);
// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app);
