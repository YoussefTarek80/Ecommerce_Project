const products = require("../Models/ProductModel.js");
const saleProducts = require("../Models/SaleModel.js");
const addProduct = async (req, res) => {
  try {
    let newProduct = new products({
      title: req.body.title,
      description: req.body.description,
      sallary: req.body.sallary,
      image: req.body.image,
    });
    await newProduct.save();
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.send("Error in add product");
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await products.findOneAndDelete({ _id: productId });
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted", deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getProducts = async (req, res) => {
  const allproducts = await products.find();
  res.send(allproducts);
};
const AddSaleProduct = async (req, res) => {
  try {
    const ProductId = req.params.productid;
    const saleValue = req.body.sale;
    const existingSale = await saleProducts.findOne({ product: ProductId });
    if (existingSale) {
      return res.status(400).json({ error: "Product already has a sale" });

    }
    const product = await products.findById(ProductId);
    if (product) {
      if (saleValue === 0) {
        throw new Error("Cant Added Sale 0");
      } 
      else {
          const newSalary =
            product.sallary - product.sallary * (saleValue / 100);
          product.sallary = parseFloat(newSalary).toFixed(2);
          await product.save();
      }
    } 
    else {
      return res.status(404).json({ error: "Product not found" });
    }

    let NewSaleProduct = new saleProducts({
      product: product,
      Value: saleValue,
    });
    await NewSaleProduct.save();

    res.json({ message: "Sale added successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getSaleProducts = async (req, res) => {
  try {
    const productsWithSales = await saleProducts.find().populate("product");

    res.json({ products: productsWithSales });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  addProduct,
  getProducts,
  deleteProduct,
  AddSaleProduct,
  getSaleProducts,
};
