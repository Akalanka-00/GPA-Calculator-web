const express = require('express')
const register_user = require('../api_operations/authentication/register_apis/register_user')
const login_user = require('../api_operations/authentication/login_apis/login_user')
const verify_user = require('../api_operations/authentication/login_apis/verify_user')
const get_user = require('../api_operations/authentication/login_apis/get_user')
const router = express.Router()

router.post('/login' ,(req,res,next)=>{
    login_user(req,res);
})

router.post('/register' ,(req,res,next)=>{
   // console.log(req.body)
    // res.send(req.body);
    verify_user(req,res);
    register_user(req,res);
})

router.get('/getUser/:username' ,(req,res,next)=>{
    get_user(req,res)
 })
 
 





module.exports = router
