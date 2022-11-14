const express = require("express")
const { store } = require("../controller/user")



const router = express.Router()

router.get("", () => {
    console.log("test from router...")
})

router.post("", store)


module.exports = router;



