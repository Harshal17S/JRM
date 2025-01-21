import React from "react";
import { useNavigate } from "react-router-dom";
import './Products.css'

const Products=()=>{

    const [name, setname] = React.useState("");
    const [type, settype] = React.useState("");
   
  const [requiredmoney, setrequiredmoney] =React. useState("");
  const [mode, setmode] = React.useState("");

  const [rate,setrate]=React.useState("");
  const [mobile,setmobile]=React.useState("");

  const addproduct=async()=>{
  
    if(!name||!type || !requiredmoney || !mode ||!rate || !mobile ){
        
        return false;
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    console.warn(userId);
    let result=await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,type,requiredmoney,mode,rate,mobile}),
        headers:{
            "Content-type":"application/json"
        }
    }); 
    result= await result.json();
    console.log(result)
    alert("Item added Succesfully")

    }
  
    return(
    
        
       <div className="product">

       <h1 className=" text-xl center">Form</h1>
       <input  className="inputbox" type="text" placeholder="Name" value={name} onChange={(e)=>{
        setname(e.target.value)
       }}/>
       
        <input className="inputbox" type="text" placeholder="Personal/Business" value={type} onChange={(e)=>{
        settype(e.target.value)
       }}/>
        
        <input  className="inputbox" type="text" placeholder="Enter Amount" value={requiredmoney} onChange={(e)=>{
        setrequiredmoney(e.target.value)
       }}/>
       
        <input className="inputbox" type="text" placeholder="Equity/Interest" value={mode} onChange={(e)=>{
        setmode(e.target.value)
       }}/>

<input className="inputbox" type="text" placeholder="Rate" value={rate} onChange={(e)=>{
        setrate(e.target.value)
       }}/>
        <input className="inputbox" type="text" placeholder="Mobile No" value={mobile} onChange={(e)=>{
    setmobile(e.target.value)
       }}/>
        
        <button  className="appbutt  text-red-300" onClick={addproduct}>Add product</button>


       </div>
       
        
    );
};

export default Products;