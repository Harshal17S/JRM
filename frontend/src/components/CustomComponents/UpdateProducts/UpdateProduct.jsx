


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Update.css';
import {useParams}from 'react-router-dom'

const UpdateProduct=()=>{

    const [name, setName] = React.useState("");
    // const [price, setprice] = React.useState("");
   
  const [category, setcategory] =React. useState("");
  const [company, setcompany] = React.useState("");
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
 getproductdetails()
  },[])

  const getproductdetails=async()=>{
      let result=await fetch(`http://localhost:5000/product/${params.id}`);
      result=await result.json();
      setName(result.name);
    //   setprice(result.price);
      setcategory(result.category);
      setcompany(result.company);
      console.log(result)
      

  }
  const [error,seterror]=React.useState("false");

  const updateproduct=async()=>{
   let result=await fetch(`http://localhost:5000/product/${params.id}`,{
    method:'Put',
    body:JSON.stringify({name,category,company}),
    headers:{
        'Content-Type':'Application/json'
    }
   });
   result=await result.json();
   console.log(result)
   if(result)
   {navigate("/");}
   
  
   

    }
  
    return(
    
        
       <div className="product">

       <h1 className=" text-xl center">Update</h1>
       <input  className="inputbox" type="text" placeholder="Productname" value={name} onChange={(e)=>{
        setName(e.target.value)
       }}/>
       
        {/* <input className="inputbox" type="text" placeholder="Product price" value={price} onChange={(e)=>{
        setprice(e.target.value)
       }}/> */}
       
        <input  className="inputbox" type="text" placeholder="Category" value={category} onChange={(e)=>{
        setcategory(e.target.value)
       }}/>
       
        <input className="inputbox" type="text" placeholder="comapny" value={company} onChange={(e)=>{
        setcompany(e.target.value)
       }}/>
       
        <button  className="appbutt  text-red-300" onClick={updateproduct}>Update product</button>


       </div>
       
        
    );
};

export default UpdateProduct;