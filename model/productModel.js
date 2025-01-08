const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
    type:String,
    require:true
    },
    
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:Array,
        require:true
    },
    category:{
        type:Number,
        require:true
    },
    subcategory:{
        type:String,
        require:true
    },
    sizes:{
        type:Array,
        require:true
    },
    bestSeller:{
        type:Boolean,
        require:true
    },
    date:{
        type:Number,
        require:true
    },




},{timestamps:true})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel