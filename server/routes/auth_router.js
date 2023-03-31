const express = require('express')
const router = express.Router()

var register = require("../api_operations/authentication/login")


router.post('/login' ,(req,res,next)=>{
    //login(req , res)
})

router.post('/register' ,(req,res,next)=>{
    register(req,res);
})

router.get('/validate' ,async (req,res,next)=>{
    //validate_token(req , res)
})

router.put('/admin/update' ,async (req,res,next)=>{
   // update_admin(req , res)
})

router.get('/get/admin' ,async (req,res,next)=>{
   // get_admin(req , res)
})


module.exports = router
