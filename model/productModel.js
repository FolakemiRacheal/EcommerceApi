const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
    type:String,
    require:true
    },
    brandName:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },


},{timestamps:true})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel