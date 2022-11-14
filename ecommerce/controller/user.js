const User = require("../model/User")


const store = async (req, res, next) => {

    try {
        let user = await User.create({ ...req.body })
        res.send(user)
    }
    catch (err) {
        next(err)
    }

}


module.exports = {
    store
}

