const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));

// Configure static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Put API routes here, before the "catch all" route
app.use('/', require('./routes/api/products'));
app.use('/', require('./routes/api/cart'));


// The following "catch all" route is necessary for
// a SPA'sclient-side routing to properly work
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});