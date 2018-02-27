const express = require('express')
const router = express.Router()
const app = express()
const cartController = require('./../../controllers/cartController')

// Routes defined belowr
router.get('/api/add-product/:product_id', cartController.addToCart)
router.get('/api/delete-product/:product_id', cartController.removeFromCart)


module.exports = router