const express = require('express')
const ip_fetch = require('../api_operations/service/ip_fetch')
const router = express.Router()



router.get('/ipaddress' ,(req,res,next)=>{
    ip_fetch(req,res);
});

router.post('/logdata' ,(req,res,next)=>{
    ip_fetch(req,res);
});



module.exports = router
