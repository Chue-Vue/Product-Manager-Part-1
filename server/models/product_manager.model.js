const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required!"],
        minlength: [5, "Title must be at least 5 characters!"]
    },
    price:{
        type: Number,
        required: [true, "Price is required!"]
    },
    description:{
        type: String,
        required: [true, "A description is required!"],
        minlength: [5, "Description must be at least 5 characters!"]
    }
}, {timestamps:true})

// const ProductManager = mongoose.model("Product", ProductSchema)

// module.exports = Product;

module.exports.Product = mongoose.model("Product", ProductSchema)