const express = require('express')
const ip_fetch = require('../api_operations/service/ip_fetch');
const handle_log_data = require('../api_operations/service/handle_log_data');
const router = express.Router()



router.get('/macaddress' ,(req,res,next)=>{
    ip_fetch(req,res);
});

router.post('/logdata' ,(req,res,next)=>{
    handle_log_data(req,res);
});



module.exports = router
