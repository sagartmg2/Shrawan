const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const store = async (req, res, next) => {

    let hased_pw = await bcrypt.hash(req.body.password, 10);
    try {
        let user = await User.create({ ...req.body, password: hased_pw })
        res.send(user)
    }
    catch (err) {
        next(err)
    }

}

const login = async (req, res, next) => {

    let user = await User.findOne({ email: req.body.email })

    if (user) {
        // check password
        let db_user = await User.findOne({ email: req.body.email }).select("password")

        let status = await bcrypt.compare(req.body.password, db_user.password);

        if (status) {
            // var token = jwt.sign({ ...user.toObject(), password: "" }, 'shhhhh');
            var token = jwt.sign(user.toObject(), process.env.JWT_SECRET);

            return res.send({
                token,
                user,
            })
        }
    }

    return res.status(400).send("invalid credentials")
}


const getUser = (req, res, next) => {
    // TODO:// send user data if user is logged in and sends token in request...else 401 bad.. 
}

module.exports = {
    store,
    login,
    getUser
}

