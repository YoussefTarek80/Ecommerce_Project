const express=require('express');
const route=express.Router();
const product=require('../Controllers/ProductControll.js');
route.post('/',product.addProduct);
route.post('/:productid',product.AddSaleProduct);
route.delete('/:id',product.deleteProduct);
route.get('/',product.getProducts);
route.get('/GetSaleProducts',product.getSaleProducts);
module.exports=route;