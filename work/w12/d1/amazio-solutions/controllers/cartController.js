const Product = require('./../models/Product')
const Cart = require('./../models/Cart')

function addToCart(req, res) {
    Cart.findOne({}, (err, cart) => {
        cart.products.push(req.params.product_id);
        cart.save();
        res.json(cart);
    })
}

function removeFromCart(req, res) {
    console.log(req.params)
    let id = req.params.product_id
    Cart.find({}, (err, cart) => {
        let currentCart = cart[0]
        console.log(currentCart)
        currentCart.products.remove(id)
        currentCart.save()
        res.end()
    })
}

function getCartItems(req, res) {
    Cart.findOne({})
    .then(function(cart) {
        res.json(cart.products).status(200);
    })
}

module.exports = {
    addToCart,
    removeFromCart,
    getCartItems
}