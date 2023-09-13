const mongoose=require('mongoose');

const CartSchema=mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    quantity:{
        type:Number,
        require:true,
    }
});
const cart =mongoose.model("cart",CartSchema);
module.exports=cart