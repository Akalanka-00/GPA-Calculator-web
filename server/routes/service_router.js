const express = require('express')
const ip_fetch = require('../api_operations/service/ip_fetch');
const handle_log_data = require('../api_operations/service/handle_log_data');
const get_user_name = require('../api_operations/service/get_user_name');
const router = express.Router()



router.get('/macaddress' ,(req,res,next)=>{
    ip_fetch(req,res);
});

router.post('/logdata' ,(req,res,next)=>{
    handle_log_data(req,res);
});

router.post('/username' ,(req,res,next)=>{
   //get_user_name(req,res);
   res.send(req.body);
});




module.exports = router
