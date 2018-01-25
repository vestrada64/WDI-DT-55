const express = require('express')
const router = express.Router()
const posts = require('./../controllers/postsController')

router.post("/users/:id/posts/", posts.create)
router.delete("/users/:id/posts/:post_id",posts.destroy)

module.exports = router