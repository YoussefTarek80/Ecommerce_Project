const express=require('express');
const route=express.Router();
const product=require('../Controllers/ProductControll.js');
route.post('/',product.addProduct);
route.get('/',product.getProducts)
module.exports=route;