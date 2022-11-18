

const express = require("express");
const { store } = require("../controller/order");
const router = express.Router();


router.post("", store)

module.exports = router
