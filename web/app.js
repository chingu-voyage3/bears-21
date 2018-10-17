'use strict';

const promisify = require('es6-promisify');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require( 'mongoose');
const cookieParser = require('cookie-parser');
const http = require('http');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const RedisStore = require('connect-redis')(session);

const auth = require('./routes/auth');
const passport = require('passport');
const routes = require('./routes');
const errorHandlers = require('./handlers/errorHandlers');
const logger = require('./logger');

const app = express();

app.set('view engine', 'pug');

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// Middlewares
// app.use(morgan('tiny'));
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());
// Exposes a bunch of methods for validating data.
// Used heavily on userController.validateRegister
app.use(expressValidator());
// Sessions allow us to store data on visitors from request to request
app.use(session({
  store: new RedisStore(),
  secret: 'anything',
  keys: ['secretkey'],
  cookie: { secure: false, maxAge:86400000 },
  resave: true,
  saveUninitialized: true,
  //store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport JS is what we use to handle our logins
auth.init();
app.use(passport.initialize());
app.use(passport.session());


// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use(routes);

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
//app.use(errorHandlers.productionErrors);

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app);
