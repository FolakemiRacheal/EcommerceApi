const express = required ("express")
const {addProduct, removeProduct, listProduct, oneProduct} = require ("../controller/productController")

const router = express.Router()

router.post("/addProduct", addProduct)
router.get("/listProduct", listProduct)
router.get("/oneProduct", oneProduct)
router.delete("/removeProduct", removeProduct)

module.exports = router