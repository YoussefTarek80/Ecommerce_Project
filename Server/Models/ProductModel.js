const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    sallary:{
        type:Number,
        require:true,
    },
    image: {
        type: String,
        required: true,
    },
})
const products=mongoose.model("Products",ProductSchema);
module.exports=products;