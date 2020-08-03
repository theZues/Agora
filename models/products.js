const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    img: String,
    name: String,
    link: String,
    details: String
});

const ProductSchema = mongoose.model('ProductSchema', productSchema);

module.exports = ProductSchema;


