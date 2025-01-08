const express = require('express')
const { signUp, login, verifyEmail, resendVerificationEmail, ForgetPassword, changePassword, ResetPassword, makeAdmin, updateUser, deleteUser, oneUser, getAll, logOut } = require('../controller/userController')
 

const router = express.Router()

router.post('/sign-up',signUp)
router.post('/sign-in',login)
router.get('/verify/:token',verifyEmail)
router.post('/resend-verification',resendVerificationEmail)
router.post('/forgot-password',ForgetPassword)
router.post('/change-password/:token',changePassword)
router.post('/reset-password/:token',ResetPassword)
// router.put('/make-admin/:id',isAdmin,makeAdmin)
// router.put('/update/:id',authenticate,updateUser)
// router.get('/getone/:id',authenticate,oneUser)
// router.get('/getall',authenticate,isAdmin,getAll)
router.post('/log-out',logOut)
// router.delete('/delete/:userId',isAdmin,deleteUser)

module.exports = router
















// module.exports = router 

// const express = require('express')

// const {loginUser, registerUser,adminLogin} = require("../controller/userController")

// const router = express.Router()


// router.post('/sign-up',registerUser)
// router.post('/sign-in',loginUser)
// router.post('/sign-in',adminLogin)