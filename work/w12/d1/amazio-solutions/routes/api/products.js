const express = require('express')
const app = express()
const router = express.Router()
const productsController = require('./../../controllers/productsController')

router.get('/api/products', productsController.getAllProducts)

module.exports = router