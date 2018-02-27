const Product = require('./../models/Product')

function getAllProducts(req, res) {
    Product.find({}, function(err, data) {
        res.status(200).json(data)
    })
}

module.exports = {
    getAllProducts: getAllProducts
}