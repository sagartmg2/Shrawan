const express = require("express")

const app = express();

require('dotenv').config()
require("./config/db_connection")
const user_route = require("./route/user")

app.use(express.json()) // to read request body
app.use("/api/users", user_route);
// app.use("/api/product", user_route);
// app.use("/api/orders", user_route);




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
    let error = err.message
    let errors = []


    if (err.name == "ValidationError") {
        msg = "Bad Request"
        status = 400

        Object.entries(err.errors).forEach(el => {
            errors.push({
                msg: err.errors[el[0]].message,
                param: err.errors[el[0]].path
            })
        })
    }

    res.status(status).send({
        data: {
            msg,
            error,
            errors,
            stack: err.stack
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log("listening on port ");
})