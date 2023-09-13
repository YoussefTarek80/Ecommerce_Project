
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const product=require('./Routes/ProductRoutes.js');
const user=require('./Routes/AuthRoutes.js');
const payment=require('./Routes/PaymentRoutes.js');
const cors = require('cors');
const path = require('path');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose.connect("mongodb://localhost:27017/ProductsClothes").then(() => {
  console.log("Connect to Database...");
}).catch((err)=>{console.log("error to coonection")});

app.use(express.json());
app.use(cors());
app.use('/product',product);
app.use('/auth',user);
app.use('/payment',payment);
// app.use('/cart',cart);
app.get('/', (req, res) => {
  res.render('Payment-template'); 
});


app.listen(3000,()=>{
    console.log(`Server running at 3000`)
})