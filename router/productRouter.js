const express = require ("express")
const {addProduct, removeProduct, listProduct, oneProduct} = require ("../controller/productController")

const productRouter = express.Router()

productRouter.post('/addProduct', addProduct)
 productRouter.get("/listProduct", listProduct)
 productRouter.get("/oneProduct/:id", oneProduct)
 productRouter.delete("/removeProduct/:id", removeProduct)

module.exports = productRouter




