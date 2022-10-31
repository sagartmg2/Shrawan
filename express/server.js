const express = require("express") // common js

const app = express()

// const app = require("express")()
// const axios = require("axios")
// import axios from "axios"; // es6 module system


/*  
    middleware
        - function which has access to request and response.
        function (req,res,next) {

        }

        next -> next function points out to the next/following middleware in line

    global middleware
    local middleware
*/


/* 
    protecte route
        middleware -> which checks if request contains token or not. 
*/


// const authenticate = (req, res) => {
//     let token = false;
//     if(!token){
//         res.send("unauthenticated")
//     }
// }   

// app.use(authenticate)



// app.use((req, res) => {
//     console.log("all...")
// })

app.use(express.json())


app.use((req, res, next) => {
    req.body = {
        name: "modified data."
    }
    next()
    // res.send("global middleware")
})


app.use((req, res, next) => {
    // check if req has token
    // req.token = asdfadsfadfs
    let token ="asdfasdfadsfadsfa"

    // verify the request token by jsonwebtoken package

    let status = false

    if (status) {
        next()
        return;
        console.log("after return")
    }
    
    res.statusCode = 401;
    /* 
        401 - unauthenticated
        403 - unauthorized.
    */
    res.send("eroor 401 unauntenciated..")

})


app.use((req, res, next) => {
    console.log("second global middelware ");
    next()
})

app.get("/auth", (req, res) => {
    res.send("authenticated.")
})


app.post("/orders", (req, res) => {

    console.log("req.body =", req.body);
    res.send("orders")
})

app.get("/orders", (req, res) => {

    console.log("req.body =", req.body);
    res.send("orders")
})


app.get("/products/:id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    res.send("product..")
})


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/arrow", (rq, res) => {
    res.send("arrwo")
})

const storeProduct = (req, res) => {

    // console.log("body", req.body)

    res.send("products created")
}

/* 
    endpoints - products
        get
        put
        post

*/


app.post("/products", storeProduct)

app.listen(8000, (data, err) => {
    console.log("listening....");
})