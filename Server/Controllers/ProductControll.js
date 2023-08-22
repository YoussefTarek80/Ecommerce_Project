const products=require('../Models/ProductModel.js');
const addProduct=async (req,res)=>{
    try{
        let newProduct = new products({
            title: req.body.title,
            description: req.body.description,
            sallary: req.body.sallary,
            image: req.body.image,
        });
        await newProduct.save();
        res.send(req.body);
    }
    catch(err){
        console.log(err);
        res.send("Error in add product");
    }
}

const getProducts=async(req,res)=>{
    const allproducts=await products.find();
    res.send(allproducts);
}
module.exports = { addProduct,getProducts};