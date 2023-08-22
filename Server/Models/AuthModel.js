const mongoose=require('mongoose');

const SignupSchema=mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    
    password:{
        type:String,
        require:true
    },
    confpassword:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    adminrole:{
        type:Boolean,
        default: false,
    }
});
const user =mongoose.model("user",SignupSchema);
module.exports=user