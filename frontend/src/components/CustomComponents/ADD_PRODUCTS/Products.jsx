import React from "react";
import { useNavigate } from "react-router-dom";
import './Products.css'

const Products=()=>{

    const [name, setName] = React.useState("");
    const [price, setprice] = React.useState("");
   
  const [category, setcategory] =React. useState("");
  const [company, setcompany] = React.useState("");

  const [error,seterror]=React.useState("false");

  const addproduct=async()=>{
  
    if(!name||!price || !category || !company){
        seterror(true);
        return false;
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    console.warn(userId);
    let result=await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,company,userId}),
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
       <input  className="inputbox" type="text" placeholder="Productname" value={name} onChange={(e)=>{
        setName(e.target.value)
       }}/>
       {error && !name &&<span className=" text-red-600 mx-5">Enter Valid Name</span>}
        <input className="inputbox" type="text" placeholder="Product price" value={price} onChange={(e)=>{
        setprice(e.target.value)
       }}/>
        {error && !price &&<span className=" text-red-600 mx-5">Enter Valid price</span>}
        <input  className="inputbox" type="text" placeholder="Category" value={category} onChange={(e)=>{
        setcategory(e.target.value)
       }}/>
        {error && !category &&<span className=" text-red-600 mx-5">Enter Valid category</span>}
        <input className="inputbox" type="text" placeholder="comapny" value={company} onChange={(e)=>{
        setcompany(e.target.value)
       }}/>
        {error && !company &&<span className=" text-red-600 mx-5">Enter Valid company</span>}
        <button  className="appbutt  text-red-300" onClick={addproduct}>Add product</button>


       </div>
       
        
    );
};

export default Products;