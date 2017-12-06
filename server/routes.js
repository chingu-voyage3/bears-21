'use strict'

const { Router } = require('express');

const router = new Router();

router.get('/api/v1/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
