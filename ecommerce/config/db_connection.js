const mongoose = require("mongoose")


mongoose
    .connect(process.env.DB_URL)
    .then(res => {
        console.log("mongodb connected");
    })
    .catch(err => {
        console.log({ err });
    })