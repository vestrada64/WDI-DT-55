const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const productSchema = Schema({
    name: String,
    description: String,
    sku: String,
    price: Number
    }, {
        timestamps:  true
    })

module.exports = mongoose.model('Product', productSchema)