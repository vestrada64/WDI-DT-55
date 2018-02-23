const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();

// Load all .env variables
require('dotenv').config();

// Connect to MongoDB database
require('./config/db');

// Mount middleware
app.use(express.static(path.join(__dirname, 'build')));
app.use(logger('dev'));
app.use(bodyParser.json());
// TODO: Look this up (line below)
app.use(bodyParser.urlencoded({extended: true}));

// Put API routes here, before the "catch all" route
app.use('/api', require('./api/beans'));

// The following "catch all" route is necessary for
// a SPA'sclient-side routing to properly work
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));