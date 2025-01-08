const userModel = require ("../model/userModel")
//const productModel = require("../model/productModel")

exports.addToCart = async(req,res) =>{
try {
const {userId, itemId, size} = req.body

const userData = await userModel.findById(userId)
let cartData = await userData.cartData;

        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else{
             cartData[itemId][size] = 1
            }
            
             


        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1

        }

await userModel.findByIdAndUpdate(userId, {cartData})
return res.status(200).json({
    message:"successfully added to cart",
    
})


    } catch (error) {
        return res.status(500).json({
            message:"internal server error" + error.message
        })
    }
}



exports.updateCart = async(req,res) =>{
    try {
        const {userId, itemId, size, quantity} = req.body
       
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData [itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
return res.status(200).json({
    message:"successfully updated cart"
})


    } catch (error) {
        return res.status(500).json({
            message:"internal server error" + error.message
        })
    }
}

exports.getUserCart = async(req,res) =>{
    try {
        const userId = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        return res.status(200).json({
            message:"successfully updated cart"
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error" + error.message
        })
    }
}