const mongoose=require('mongoose');

const SaleSchema=mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    Value: {
        type:Number,
        require:true,
    },
})
const SaleProducts=mongoose.model("Sale",SaleSchema);
module.exports=SaleProducts;