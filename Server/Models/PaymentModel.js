const mongoose=require('mongoose');
const PaymentSchema=mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    CardNumbers:{
        type:Number,
        require:true,
    },
    CCV:{
        type:Number,
        require:true, 
    }
});
const payment =mongoose.model("payment",PaymentSchema);
module.exports=payment