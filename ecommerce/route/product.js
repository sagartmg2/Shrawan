

const express = require("express")
const { index, store, update, updateReview, remove } = require("../controller/product");
const { validateToken, isSeller } = require("../middeware/auth");

const router = express.Router();

router.get("", index)
router.post("", validateToken, isSeller, store)
router.put("/:id", update)
router.put("/reviews/:id",validateToken,updateReview)
router.delete("/:id", remove)



module.exports = router