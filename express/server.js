

const express = require("express")
const mongoose = require('mongoose');

const app = express()

const User = require("./model/User")

const { body, validationResult } = require('express-validator');


/* 
[
  {
    title:""
    price:8800
  },
  {
    title:""
    price:8800
  }
  {
    title:""
    rate:8800
  }

]

product.mpa(product =>{
    return <div>
            name
            price: product.price
    </div>
})


[
    {
        name:
        age:
    }
    {
        name:
    }
    
]

users.map(user => {
    return <user
    user.age
})

*/
mongoose
    .connect('mongodb://localhost:27017/shrawan')
    .then(res => {
        console.log("mongodb connected");
    })
    .catch(err => {
        console.log({ err });
    })

let auth_middleware = (req, res, next) => {
    // console.log("inside auth middleware.");
    next();
}

app.use(auth_middleware)

app.use(express.json())


app.get("/test", (req, res) => {
    res.send("TEST")
})

app.post("/users",
    body('password').exists().isLength({ min: 8 }),
    body('name').exists(),
    (req, res, next) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    },
    async (req, res) => {

        // User.findOne({ email: "b@b.com" }, (err, data) => {
        //     console.log(data)
        // })

        // // let e_user = await  Product.findById("adfsadsf")
        // let e_user = await  User.findOne({ email: "b@b.com" })
        // console.log(e_user)
        // console.log("second..");

        // return;
        // db.users.insertOne()


        // let user = new User({
        //     name:"smth"
        // })

        // user.save();

        // if (!req.body.name) {

        // }


        // console.log(req.body);

        console.log("payment_received");

        /*  */

        const { name, age } = req.body

        User.create(req.body, (err, db_res) => {
            if (err) {
                return res.status(500).send("error " + err.message)
            }
            res.send(db_res)

        })

        /* 
            http status codes
            200
            400
                400 - bad request
                401
                403
                404
            500 - server
        */



        return

        // try {

        let user = await User.create({
            name: "Ram with no age",
            age: "adsfasdf"
        })

        if (user) {
            res.send(user)
        }
        // }
        // catch (err) {
        //     res.status(500).send("from try catch")
        //     console.log(err.message);
        // }



        return;
        User.create({
            name: "Ram with no age",
            // age: "adsfasdf"
        })
            .then(db_res => {
                console.log("db response")
                console.log("set in users...");
                res.send(db_res)
            }).catch(err => {
                res.status(500).send("server errro")
                console.log(err.message);
            })

    })


app.listen(8000, (err, data) => {

    if (err) {
        return console.log({ err });
    }
    console.log("listinig... 8000");


})
