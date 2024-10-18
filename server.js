
require("dotenv").config()
const express = require("express");
 const mongoose = require("mongoose");
 PORT = process.env.PORT

 const app = express();
 app.use(express.json());

 const router = require("./router/userRouter")
 const productRouter = require("./router/productRouter")
 const cartRouter = require("./router/cartRouter")
 
app.use("/api/v1/",router)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/cart",cartRouter)
dataBaseUri = process.env.dataBaseUri



 mongoose.connect(dataBaseUri).then(()=>{
console.log("successful connection to database")
 }).catch((error)=>{
    console.log(error.message)

 })

 app.listen(PORT,()=>{
    console.log(`server is up and running on ${PORT}` )
 })