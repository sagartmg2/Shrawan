const jwt = require("jsonwebtoken");
const { BUYER, SELLER } = require("../constant/role");

const validateToken = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1]  // Bearer<space>eadsf.asdfadsf.afdsads
            if (token) {

                var decoded = jwt.verify(token, process.env.JWT_SECRET); // {name:user_name,email......,..}

                // console.log({ decoded })
                req.user = decoded  // {_id,role,email}
                if (decoded) {
                    return next()
                }
            }
        }
    }
    catch (err) {
        return next(err)
    }

    return res.status(401).send({
        data: {
            msg: "Unauthenticated."
        }
    })
}

const isSeller = (req, res, next) => {
    if (req.user.role == SELLER) {
        return next()
    }
    
    return res.send(403).send({
        data: {
            msg: "unauthorized.."
        }
    })
}


const isBuyer = (req, res, next) => {
    if (req.user.role == BUYER) {
        return next()
    }
    return res.send(403).send({
        data: {
            msg: "unauthorized.."
        }
    })
}

module.exports = {
    validateToken,
    isSeller
}