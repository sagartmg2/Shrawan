const express = require("express")

const app = express();

require('dotenv').config()
require("./config/db_connection")
const user_route = require("./route/user")

app.use("/api/users", user_route);



/* 
use
usrs
orders
products

 */

app.use((req, res, next) => {
    let msg = "resource not found"
    res.send(404).send(
        {
            data: {
                msg
            }
        }
    )
})

app.use((err, req, res, next) => {
    let status = 500
    let msg = "server Error"
    let error = err.message;
    let errors = []

    console.log(err.errors)
    /* 
        let errors = [{
            password: msg,
            email: msg
        }]
    */



    if (err.name == "ValidationError") {
        msg = "Bad Request"
        status = 400
    }

    res.status(status).send({
        data: {
            msg,
            error
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log("listening on port ");
})