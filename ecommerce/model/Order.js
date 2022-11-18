
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = require("./Product")

const OrderSchema = new Schema({
    products: {
        type: [{
            product_id: {
                type: ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                min: 1,
                required: true,
            },
            price: {
                type: Number,
                required: true,
                // set: async function (value) {
                //     // let product =  Product.findById(this.product_id)
                //     // let final = parseFloat(this.quantity * product.price);
                //     // console.log(product.price)
                //     // console.log(final)
                //     return 1123
                // }
            },
            status: {
                type: String,
                enum: ["pending", "completed", "rejected"]
            }
        }],
        validate: {
            validator: function (values) {
                if (values.length == 0) {
                    return false
                }
            },
            message: "atleast one product is required."
        }
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Order", OrderSchema)



/* 

    products:[
        {
            _id,
            price
            quantity
            status: [pending, completed, rejectd...]
        }
        {
            _id,
            price
            quantity
        }
    ]
*/