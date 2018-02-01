var mongoose = require('mongoose');
mongoose.Promise = Promise;

// database connection event
mongoose.connection.once('open', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;