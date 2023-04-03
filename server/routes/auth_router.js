const express = require('express')
const register_user = require('../api_operations/authentication/register_apis/register_user')
const router = express.Router()

router.post('/check/username' ,(req,res,next)=>{
    // res.send(req.body);
})

router.post('/register' ,(req,res,next)=>{
   // console.log(req.body)
    // res.send(req.body);
    register_user(req,res);
})





module.exports = router
