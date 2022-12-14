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


// app.use((req, res, next) => {
//     // check if req has token
//     // req.token = asdfadsfadfs
//     let token ="asdfasdfadsfadsfa"

//     // verify the request token by jsonwebtoken package

//     let status = false

//     if (status) {
//         next()
//         return;
//         console.log("after return")
//     }

//     res.statusCode = 401;
//     /* 
//         401 - unauthenticated
//         403 - unauthorized.
//     */
//     res.send("eroor 401 unauntenciated..")

// })


// app.use((req, res, next) => {
//     console.log("second global middelware ");
//     next()
// })


const auth = (req, res, next) => {
    console.log("middleware");

    let logged_in = true;
    if (logged_in) {
        next();
        return
    }
    res.status(401).send("unauthenticated")
    // res.send({msg:"success"})
}

// app.use(auth)

/* 
    200,
    3 - redirect
    4 - client error
        400 - bad request 
        401 - unauthenticated 
        403 - forbidden / unauthrozied
        404 - resoruce not found
    500 - server error 

*/

app.get("/auth", auth, (req, res) => {
    res.send("authenticated.")
})
const path = require("path")

app.use(express.static('public'))
// import { engine } from 'express-handlebars';
const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/html", (req, res) => {

    let names = [
        { id: 1, name: "Ramm" },
        { id: 2, name: "Shyamm" },
    ]

    console.log(__dirname)
    console.log(path.join(__dirname, "../index.html"))
    res.setHeader('content-type', 'text/html');
    // res.setHeader('content-type', 'application/json');

    res.render('custom', {
        name: names.find(el => el.id == 2).name
    });

    return;


    res.sendFile(path.join(__dirname, "../index.html"))
    // res.send(names.find(el => el.id == 2))
    // res.send()
})

app.get("/home", (req, res) => {

    try {
        let a = b + c;
        res.send("home")

    }
    catch (err) {
        res.status(500).send({
            data: "Server Error"
        })
    }

})


app.post("/orders", (req, res) => {
    console.log("req.body =", req.body);
    res.send(["orders", {}])
})

app.get("/orders", auth, (req, res, next) => {
    try {
        let a = b + c;
        console.log("req.body =", req.body);
        res.send(["orders", "next order"])
    }
    catch (err) {
        console.log("err");
        next(err)
        // res.status(500).send({
        //     data: "Server Error"
        // })
    }

})


app.get("/products/:id", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    res.send("product..")
})


app.get('/', function (req, res) {

    let a = b + c;

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


app.use((req, res) => {
    res.status(404).send({
        msg: "resource not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).send({
        data: "Server Error",
        msg: err.message
    })
})



app.listen(8000, (data, err) => {
    console.log("listening....");
})