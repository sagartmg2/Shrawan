

const express = require("express")
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const multer = require('multer')
const app = express()

const { body, validationResult } = require('express-validator');

const User = require("./model/User")
const Product = require("./model/Product")

app.use(express.static('uploads'))

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

const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
            console.log({file})
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+ path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage})

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




/* 
    make auth middleware.
        // verify token 

*/
// TODO: make orders route protected 


const authenticate = (req, res, next) => {

    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1]
            var decoded = jwt.verify(token, 'shhhhh');
            // console.log({ decoded })
            req.user = decoded
            if (decoded) {
                return next()
            }
        }
    }
    catch (err) {
        return next(err)
    }

    return res.status(401).send("unautnticated...")

    // axios.get(,{
    //     headers
    //     :token
    // })
}

// app.use(authenticate)

const isSeller = (req, res, next) => {

    if (req.user.role == "seller") {
        return next()
    }
    return res.status(403).send("access denied")
}

// app.use(upload.array('images', 12))

app.post("/products", authenticate, isSeller, upload.array('images', 12), async (req, res, next) => {

    console.log(req.body)
    console.log(req.files);
    // return;
    try {
        let product = await Product.create({ ...req.body, user_id: req.user._id,images:[...req.files.map(el => el.filename)] });
        return res.send(product)
    } catch (err) {
        return next(err)
    }

})

app.get("/orders", authenticate, isSeller, (req, res) => {
    res.send("orders")
})

app.get("/test", (req, res) => {
    res.send("TEST")
})


app.post("/login", async (req, res) => {


    // let req_token = "ezJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Njc5ODc2MzN9.yZ817SxZqtkhLTrF8ScmzNTTyzbpvjkpYVCo4qcSfNY"
    // var decoded = jwt.verify(req_token, 'shhhhh');
    // console.log(decoded)
    // return;

    let user = await User.findOne({ email: req.body.email })

    if (user) {
        // check password
        let db_user = await User.findOne({ email: req.body.email }).select("password")

        let status = await bcrypt.compare(req.body.password, db_user.password);

        if (status) {
            // var token = jwt.sign({ ...user.toObject(), password: "" }, 'shhhhh');
            var token = jwt.sign(user.toObject(), 'shhhhh');

            return res.send({
                token,
                user,
            })
        }
    }

    return res.status(400).send("invalid credentials")




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

        // db.users.inserOne({})

        // bcrypt.hash(req.body.password, 10, function(err, hash) {
        let hased_pw = await bcrypt.hash(req.body.password, 10);

        User.create({ ...req.body, password: hased_pw }, (err, db_res) => {
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
app.use((err, req, res, next) => {
    console.log(err.name)
    status = 500;

    if (err.name == "JsonWebTokenError") {
        status = 401;
    }

    res.status(status).send(err.message)
})


app.listen(8000, (err, data) => {

    if (err) {
        return console.log({ err });
    }
    console.log("listinig... 8000");


})
