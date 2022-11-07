

const express = require("express")
const mongoose = require('mongoose');

const app = express()

const User = require("./model/User")

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
    console.log("inside auth middleware.");
    next();
}

app.use(auth_middleware)


app.get("/test", (req, res) => {
    res.send("TEST")
})

app.post("/users", async (req, res) => {

    // db.users.insertOne()


    // let user = new User({
    //     name:"smth"
    // })

    // user.save();


    // req

    User.create({
        name: "Ram with no age",
        age: "adsfasdf"
    }, (err, db_res) => {
        if (err) {
            res.status(500).send("error ")
        }
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
