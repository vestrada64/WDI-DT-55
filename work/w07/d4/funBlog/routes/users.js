const express = require('express');
const router = express.Router();
const users = require('./../controllers/usersController')

router.get('/', users.index);
router.get('/new', users.newUser);
router.post('/', users.create);
router.get('/:id', users.show);

module.exports = router;
