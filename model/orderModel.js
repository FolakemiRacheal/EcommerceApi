const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

userId:{
    type:String,
    require:true
    },
    items:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
        // default:

    },
    paymentMethod:{
        type:String,
        require:true

    },
    payment:{
        type:Boolean,
        required:true,
        default: false
    },
    date:{
        type:String,
        
    },
},{timestamps:true})

    const orderModel = mongoose.model("order", productSchema)
    
    module.exports = orderModel