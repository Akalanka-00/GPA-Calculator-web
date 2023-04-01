const express = require('express')
const login = require('../api_operations/authentication/login')
const register = require('../api_operations/authentication/register')
const get_user_id_by_mail = require('../api_operations/authentication/get_user_id_by_mail')
const router = express.Router()

// var register = require("../api_operations/authentication/login")


router.post('/login' ,(req,res,next)=>{
    login(req , res)
    //console.log(req.body);
})

router.post('/register' ,(req,res,next)=>{
    register(req,res);
})

router.post('/get/userid', (req,res,next)=>{
    get_user_id_by_mail(req , res)
})

router.put('/admin/update' ,async (req,res,next)=>{
   // update_admin(req , res)
})

router.get('/get/admin' ,async (req,res,next)=>{
   // get_admin(req , res)
})


module.exports = router
