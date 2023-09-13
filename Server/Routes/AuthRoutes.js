const express=require('express');
const route=express.Router();
const user=require('../Controllers/AuthControll');
// const validateData=require('../Middlewares/validateMW.js')
route.post('/register',user.Register);
route.post('/login',user.Login);
route.post('/addMessage/:id',user.AddNewMessage);
route.post('/addToCart/:id',user.addItemToCart);
route.get('/getusers',user.getUsers);
route.get('/getadmins',user.getadmins);
route.get('/getuserCart/:id',user.GetUserCart);
route.get('/getuserMessage/:id',user.GetMessage);
route.delete('/deleteFromCart/:id/:productid',user.DeleteItemCart);
route.delete('/deleteUser/:id',user.DeleteUser);
module.exports=route;