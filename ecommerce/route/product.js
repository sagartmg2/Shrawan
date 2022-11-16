

const express = require("express")
const { index, store, update, remove } = require("../controller/product");
const { validateToken } = require("../middeware/auth");

const router = express.Router();

router.get("", index)
router.post("", validateToken, store)
router.put("", update)
router.delete("", remove)



module.exports = router