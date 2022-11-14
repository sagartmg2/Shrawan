const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1]  // Bearer<space>eadsf.asdfadsf.afdsads
            if (token) {

                var decoded = jwt.verify(token, process.env.JWT_SECRET); // {name:user_name,email......,..}

                // console.log({ decoded })
                req.user = decoded
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

module.exports = {
    validateToken
}