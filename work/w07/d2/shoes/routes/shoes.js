const express = require('express');
const router = express.Router();
const shoes = require('./../controllers/shoesController');

router.get('/shoes', shoes.index); //x
router.get('/shoes/new', shoes.new); //x
router.post('/shoes', shoes.create); //x
router.get('/shoes/:id', shoes.show);
router.get('/shoes/:id/edit', shoes.edit);
router.put('/shoes/:id', shoes.update);
router.delete('/shoes/:id', shoes.destroy);

module.exports = router;