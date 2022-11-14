const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
        select: false,  // return all field except password
    },
    email: {
        type: String,
        // unique: true,
        required: true,
        validate: {
            validator: async function (value) {
                let exists = await mongoose.models.User.count({ email: value })
                // let e_user = await this.constructor.findOne({ email: value })
                if (exists) {
                    return false
                }

            },
            message: "email already exists"
        }
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        lowercase: true,
        required:true,
    },
});

module.exports = mongoose.model("User", UserSchema)
