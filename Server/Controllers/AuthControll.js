const user = require("../Models/AuthModel.js");
const Product = require("../Models/ProductModel.js");
const message =require("../Models/MessageModel.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");
const Register = async (req, res) => {
  try {
    const { email, password, confpassword, phone, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      address: req.body.address,
      adminrole: req.body.adminrole,
      cart: [],
      messages:[]
    });
    await newUser.save();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ecommercewebsite29@gmail.com",
        pass: "ytnundhsrakhkdfx",
      },
    });
    const mailOptions = {
      from: "ecommercewebsite29@gmail.com",
      to: email,
      subject: "Registration Successful",
      html: await generateRegistrationEmailHtml({ email, phone, address }),
    };
    async function generateRegistrationEmailHtml(userData) {
      try {
        const templatePath = "./views/Register-template.ejs";
        const template = fs.readFileSync(templatePath, "utf-8");
        const renderedTemplate = await ejs.render(template, userData);
        return renderedTemplate;
      } catch (templateError) {
        console.error("Error rendering template:", templateError);
        throw templateError;
      }
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
    res.send(req.body);
  } catch (err) {
    res.send(err);
  }
};
const Login = async (req, res) => {
  try {
    let existEmail = await user.findOne({ email: req.body.email }).exec();
    if (!existEmail) {
      return res.status(400).send("Email or password not Match");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      existEmail.password
    );
    if (!validPassword) {
      return res.status(400).send("Email or password Not match");
    }
    const adminrole = await existEmail.adminrole;

    const token = jwt.sign({ userid: existEmail._id }, "keysecret");
    res.header("x-token", token);

    const UserIdLogin = existEmail._id;
    res.send({ message: "Login Successfully", adminrole, token, UserIdLogin });
  } catch (err) {
    res.status(500).send("Error in login");
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await user.find().exec();
    const Users = users.filter(user => user.adminrole === false);
    res.send({ users: Users });
  } catch (err) {
    res.status(500).send("Error in login");
  }
};
const getadmins = async (req, res) => {
  try {
    const users = await user.find().exec();
    const adminUsers = users.filter(user => user.adminrole === true);
    res.send({ users: adminUsers });
  } catch (err) {
    res.status(500).send("Error in getting admin users");
  }
};
const DeleteUser=async (req,res)=>{
  try{
    const userid=req.params.id;
    const deletedUser = await user.findByIdAndRemove(userid).exec();
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({ message: "User deleted successfully." });
  }
  catch(error){
    console.error("Error deleting", error);
    res
      .status(500)
      .json({ error: "An error occurred" });
  }
};
const addItemToCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const productId = req.body.productId;
    const existuser = await user.findById(userId);
    if (!existuser) {
      return res.status(404).json({ error: "User not found." });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    const cartItem = existuser.cart.find((item) =>
      item.product.equals(productId)
    );
    if (cartItem) {
      cartItem.quantity++;
      cartItem.total = product.sallary * cartItem.quantity;
      existuser.markModified("cart");
    } else {
      existuser.cart.push({
        product: product._id,
        title: product.title,
        image: product.image,
        sallary: product.sallary,
        description: product.description,
        quantity: 1,
        total: product.sallary,
      });
    }
    await existuser.save();
    res.status(200).json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the product to cart." });
  }
};
const GetUserCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const existuser = await user.findById(userId).exec();
    if (!existuser) {
      return res.status(404).json({ error: "User not found." });
    }
    const userCart = existuser.cart;
    res.send(userCart);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while Getting the item to the cart." });
  }
};
const DeleteItemCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const productId = req.params.productid;

    const existUser = await user.findById(userId).exec();
    if (!existUser) {
      return res.status(404).json({ error: "User not found." });
    }

    const cartItemIndex = existUser.cart.findIndex((item) =>
      item.product.equals(productId)
    );

    if (cartItemIndex !== -1) {
      existUser.cart.splice(cartItemIndex, 1);
      await existUser.save();
      res.status(200).json({ message: "Item removed from cart successfully." });
    } else {
      res.status(404).json({ error: "Item not found in cart." });
    }
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while removing the item from cart." });
  }
};
const AddNewMessage=async (req,res) =>{
  try{
    const userid=req.params.id;
    const existuser = await user.findById(userid);
    const Message=new message({
      Name: req.body.Name,
      Descrbtion: req.body.Descrbtion,
    });
    existuser.messages.push(Message);
    await existuser.save();
    res.send('added');
  }
  catch(err){
    console.log(err);
  }
}
const GetMessage=async (req,res)=>{
  try{
    const userid=req.params.id;
    const existuser = await user.findById(userid);
    res.send(existuser.messages);
  }
  catch(err){
    console.log(err);
  }
}
module.exports = {
  Register,
  Login,
  getUsers,
  addItemToCart,
  GetUserCart,
  DeleteItemCart,
  getadmins,
  DeleteUser,
  AddNewMessage,
  GetMessage
};
