const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Product = require('./Product')

const cartSchema = Schema({
    name: "String",
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Cart', cartSchema)