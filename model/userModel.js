const mongoose= require ("mongoose")
const express=require("express")

const userSchema = new mongoose.Schema({
    fullName:{
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
},{timestamps:true})

const userModel = mongoose.model("user", userSchema)


module.exports = userModel