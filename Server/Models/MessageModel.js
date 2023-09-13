const mongoose=require('mongoose');

const MessageSchema=mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Descrbtion:{
        type:String,
        require:true,
    }
});
const Message =mongoose.model("Messages",MessageSchema);
module.exports=Message