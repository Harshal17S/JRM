const mongoose=require('mongoose');

const productsschema=new mongoose.Schema({
    name:String,
    email:String,
    category:String,
    userId:String,
    company:String
});


module.exports=mongoose.model("products",productsschema);