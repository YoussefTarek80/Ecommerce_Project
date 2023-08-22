const express=require('express');
const route=express.Router();
const user=require('../Controllers/AuthControll');
// const validateData=require('../Middlewares/validateMW.js')
route.post('/register',user.Register);
route.post('/login',user.Login);
route.get('/getusers',user.getUsers);
module.exports=route;