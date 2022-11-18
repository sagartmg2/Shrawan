const express = require("express")

const app = express();

require('dotenv').config()
require("./config/db_connection")
const user_route = require("./route/user")
const product_route = require("./route/product")
const order_route = require("./route/order")

app.use(express.json()) // to read request body
app.use("/api/users", user_route);
app.use("/api/products", product_route);
app.use("/api/orders", order_route); // 401




/* 
use
usrs
orders
products

 */

app.use((req, res, next) => {
    let msg = "resource not found"
    res.status(404).send(
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

    // err = {
    //     erros: {
    //         role: {
    //             path: "role",
    //             msg: "required"
    //         },
    //         password: {
    //             path: "role",
    //             msg: "8 charcs.."
    //         },
    //     }
    // }

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