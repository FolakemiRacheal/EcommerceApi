const mongoose= require ("mongoose")
const express=require("express")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"fullName is required"]
    },
    email:{
        type:String,
        require:[true,"email is required"]
    },
    password:{
        type:String,
        require:[true,"password is required"]
    },
    cartData:{
        type:Object,
        default:{}
    },
},{timestamps:true})

const userModel = mongoose.model("user", userSchema)


module.exports = userModel
