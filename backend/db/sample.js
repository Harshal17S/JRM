const mongoose=require('mongoose');


const sample=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model("samples",sample);