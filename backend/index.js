const express=require('express');
require('./db/connection')
const user=require('./db/user');
const app=express();


app.post("/register",(req,resp)=>{
    resp.send("api in progress ")
})
app.get("/",function(req,resp){
    resp.send("App running");
});

app.listen(3000);