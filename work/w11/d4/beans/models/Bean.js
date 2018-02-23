const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beanSchema = new Schema({
    name: String, 
    description: String, 
    price: Number
});

module.exports = mongoose.model("Bean", beanSchema);