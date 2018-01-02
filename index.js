'use strict';


if (process.env.NODE_ENV !== "production") { 
  require('dotenv').config();
}

require('./web').init();
