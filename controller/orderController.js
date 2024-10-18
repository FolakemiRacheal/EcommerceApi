//making payment using cash on delivery
const payOnDelivery = async (req, res) =>{
try {
   const {userId, items, amount, address } = req.body
   
   const paymentData = {
    userId,
    items,
    amount,
    paymentMethod:"COD",
    payment:false
    //date:Date.now()

   }
    const newPayment = new orderModel(paymentData)
    await newPayment.save()

    await userModel.findByIdAndUpdate(userId, {cartData: {}})
   
    return res.status(200).json({
        message:"successfully updated cart"
    })


} catch (error) {
    return res.status(500).json({
          message : "internal server error"+ message
        })
}
}

//makng payment using paypal method
const payUsingPaypal = async (req, res) =>{
    try {
        
        const {userId, items, amount, address } = req.body

        const {origin } = req.header
   
        const paymentData = {
         userId,
         items,
         amount,
         paymentMethod:"paypal",
         payment:false
         //date:Date.now()
     
        }
         const newPayment = new orderModel(paymentData)
         await newPayment.save()

         const line_items = items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name
                },
                unit_amount:item.price * 100
            },
            quantity: item.quantity

         }))
         line_items.push({
            price_data:{
                currency:currency,
                product_data:{
                    name:'Delivery fees'
                },
                unit_amount:DeliveryFee * 100
            },
            quantity: 1


         })
         const session =  await stripe. checkout.session({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            model:'payment' ,
        })


    } catch (error) {
        
    }
    }

    const payUsingKora = async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
        }
//all payment from the admin dasboard
        const allPayment = async (req, res) =>{
            try {
                
            } catch (error) {
                
            }
            }

            //userpayment  from the frontend
            const userOrder = async (req, res) =>{
                try {
                    const {userId} = req.body

                    const orders = await orderModel.find({userId})


                    return res.status(200).json({
                        message:"successfully updated cart"
                    })
                

                } catch (error) {
                    return res.status(500).json({
                        message : "internal server error"+ message
                      })   
                }
                }


                  // updateStatus from the admin dashboard
                const updateStatus = async (req, res) =>{
                    try {
                        const {orderId, status} = req.body

                        await orderModel.finsByIDAndUpdate (orderId, {status})
                       
                        return res.status(200).json({
                            message:"successfully updated"
                        })
                    
                    } catch (error) {
                        return res.status(500).json({
                            message : "internal server error"+ message
                          })    
                    }
                    }