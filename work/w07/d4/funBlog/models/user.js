const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Post = require('./post')

const userSchema = new Schema({
    name: String, 
    age: String,
    posts: [Post]
    }, 
    {
       timestamps: true
   })


module.exports = mongoose.model('User', userSchema)