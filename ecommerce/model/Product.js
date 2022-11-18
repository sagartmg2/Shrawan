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
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    brands: [String],
    categories: {
        type: [String]
    },
    images: [String],
    created_by: {
        type: ObjectId,
        required: true,
        ref: "User"
    },
    reviews: [{
        created_by: {
            type: ObjectId,
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: {
            type: String,
            maxlength: 255,
        }
    }]
})


module.exports = mongoose.model("Product", ProductSchema)
