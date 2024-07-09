const express=require('express');
const app=express();

app.get("/",function(req,resp){
    resp.send("App running");
});

app.listen(3000);