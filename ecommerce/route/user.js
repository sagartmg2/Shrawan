const express = require("express")
const { store, login, getUser } = require("../controller/user")
const { validateToken } = require("../middeware/auth")
const { signup_middleware, login_middleware } = require("../middeware/user")


const router = express.Router()

router.get("", () => {
    console.log("test from router...")
})

// router.post("", store)
router.post("", signup_middleware, store)
router.post("/login", login_middleware, login)
router.get("/get-user", validateToken, getUser)


module.exports = router;



