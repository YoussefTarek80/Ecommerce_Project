const user=require('../Models/AuthModel.js');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Register=async(req,res)=>{
    try{
        const { email, password, confpassword, phone, address } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new user({
            email:req.body.email,
            password:hashedPassword,
            phone:req.body.phone,
            address:req.body.address,
            adminrole:req.body.adminrole
        })
        await newUser.save()
        res.send(req.body);
    }
    catch(err){
        res.send(err)
    }
};

const Login = async (req, res) => {
    try {
      let existEmail = await user.findOne({ email: req.body.email }).exec();
      if (!existEmail) {
        return res.status(400).send('Email or password not Match'); 
      }
  
      const validPassword = await bcrypt.compare(req.body.password, existEmail.password);
      if (!validPassword) {
        return res.status(400).send('Email or password Not match'); 
      }
      const adminrole= await existEmail.adminrole;
      const token = jwt.sign({ userid: existEmail._id }, "keysecret");
      res.header("x-token", token);
      res.send({message:'Login Successfully',adminrole }); 
    } catch (err) {
      res.status(500).send('Error in login'); 
    }
};
const getUsers = async (req, res) => {
  try {
    const users=await user.find().exec();
    const adminrole= await users.adminrole;
    res.send({users,adminrole});
  } catch (err) {
    res.status(500).send('Error in login'); 
  }
};
module.exports={Register,Login,getUsers}