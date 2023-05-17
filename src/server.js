'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');

const app = express();

// Middleware
app.use(logger);

// Routes

app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  if (name) {
    res.json({ name });
  } else {
    throw new Error('Name is missing');
  }
});


// Error Handlers
app.use(errorHandler404);
app.use(errorHandler500);

module.exports = {
  start: function (PORT) {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  },
  app: app,
};