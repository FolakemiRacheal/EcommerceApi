const express = require ("express")
const {addToCart, updateCart, getUserCart} = require ("../controller/cartController")

const cartRouter = express.Router()

cartRouter.post('/addToCart', addToCart)
//  cartRouter.get("/listProduct", updateCart)
//  cartRouter.get("/oneProduct/:id", getUserCart)
//  productRouter.delete("/removeProduct/:id", removeProduct)

module.exports = cartRouter
