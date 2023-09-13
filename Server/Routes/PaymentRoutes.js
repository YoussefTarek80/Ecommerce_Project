const express=require('express');
const route=express.Router();
const payment=require('../Controllers/PaymentControll.js');
route.post('/',payment.sendPaymentDeatils);
module.exports=route;