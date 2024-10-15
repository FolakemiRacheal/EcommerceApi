const cloudinary = require("cloudinary")
require("dotenv").config();

const api_key = process.env.api_key

const connectCloudinary = async()=>{
    cloudinary.config({
        cloud_name:process.env.cloud_name,
        api_key:process.env.api_key,
        api_secret:process.env.api_secret,
        secure:true
    })
}
module.exports= connectCloudinary