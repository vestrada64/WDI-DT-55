const mongoose = require('mongoose')
require('./../config/database')

// Import data 
const products = require('./sample-data.js')

// Import data models
const Product = require('./../models/Product');
const Cart = require('./../models/Cart');

// Delete all documents from collection
const seed = Promise.all([Product.remove({}), Cart.remove({})])

seed.then(function() { 
    Product.create(products)
    .then(function(err, data) {
        Cart.create({})
        .then(function() { 
            console.log('Successfully seeded database')
            require('mongoose').connection.close();
            process.exit();
        });
       
    });
});
