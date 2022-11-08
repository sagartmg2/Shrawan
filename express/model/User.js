const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    // name: String
    name: {
        type: String,
        required: [true, "the name field is required."],
    },
    age: {
        type: Number,
        // min: 1,
        // max: 100,
        validate: {
            validator: function (value) {
                if (value < 0) {
                    return false
                }
                return true
            },
            message: "not a vliad number"
        }
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
    email: {
        type: String,
        // unique: true,
        required: true,
        validate: {
            validator: async function (value) {
                let e_user = await this.constructor.findOne({ email: value })
                console.log({ e_user })
                if (e_user) {
                    return false
                }

            },
            message: "not a valid email"
        }
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        validate: {
            validator: function (value) {
                console.log({ value })
                if (!value) {
                    return false
                }
            },
            message: "not a vliad role"
        }
    },
    address: {
        // type: {
        street: {
            type: String,
        },
        woda: Number
        // }
    },
    info: {},
    phone: [],
    orders: [
        {
            p_name: {
                type: String,
                required: true
            },
            p_id: {

            }
        }
    ]
});



module.exports = mongoose.model("User", UserSchema)