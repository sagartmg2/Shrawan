const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    in_stock: {
        type: Number,
        min: 0,
        default: 0
    },
    // brands:[], "levics," [levis,{}]
    brands: {
        type: [String]
    },
    categories: {
        type: [String]
    },
    // user:{
    //     name
    // },
    user_id: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    images: []
});

module.exports = mongoose.model("Product", ProductSchema)