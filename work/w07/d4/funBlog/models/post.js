const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const postSchema = new Schema({
    content: String, 
    category: {
        type: String,
        enum: ["Nature", "Funny", "Happy"] 
        } 
    }, 
    {
        timestamps: true

    }    
)


module.exports = postSchema