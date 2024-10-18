const productModel = require("../model/productModel")
const cloudinary = require("cloudinary")

exports.addProduct = async(req, res)=>{
    try {
      const {name,brandName,description,type,category,price,date} = req.body
    //   const image1 =req.files.image1 && req.files.image1[0]
    //   const image2 =req.files.image2 && req.files.image1[0]
    //   const image3 =req.files.image3 && req.files.image1[0]
    //   const image4 =req.files.image4 && req.files.image1[0]
    //   const image5 =req.files.image5 && req.files.image1[0]
    
    // const images = [image1,image2,image3,image4,image5].filter ((item)=>item !==undefined)
    
    // let imageUrl = await Promise.all
    // images.map(async (item)=>{
    //   let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
    //   return result.secure_url
    // })
    
    
    const productData = {
      name,
      brandName,
      description,
      category,
      type,
      //image: imageUrl,
      price,
      date:Date.now()
     // bestseller:bestseller==="true"?true:false,
    }
    console.log(req.body)
    const product = new productModel(productData);
    await product.save()
    
    return res .status(200).json({
      message:'product added successfully',
      data:productData
    })
    
    
    } catch (error) {
      return res.status(500).json({
        message : "internal server error"+ error.message
      })
    }
    }
    
    exports.removeProduct = async(req, res)=>{
      try {
        const id = req.body
       const product = await productModel.findByIdAndDelete(id);
      // await productModel.findByIdandDelete(id)
       if(product){
        return res.status(200).json({
          message : "product deleted successfully"
        })
       } 
      } catch (error) {
        return res.status(500).json({
          message : "internal server error"+ error.message
        })
      }
     }

  
    
    exports.listProduct = async(req, res)=>{
      try {
        const product = await productModel.find({});
        if(product){
          return res.status(200).json({
            message:"total product available",
            data:product
          })
        }
      } catch (error) {
        return res.status(500).json({
          message: "internal server error" + error.message
        })
      }
    }
    
    
    
    
    
    exports.oneProduct = async(req, res)=>{
      try {
        const {Id} = req.params
        const product = await productModel.findById(Id)
    
        if(product) {
          return res.status(200).json({
            message:"one product successful",
            data:product
          })
        }
      } catch (error) {
        return res.status(500).json({
          message :("internal server error" + error.message)
        })
      }
    }