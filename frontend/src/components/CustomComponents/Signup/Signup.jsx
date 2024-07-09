import React,{useState}from "react";

import "./Signup.css";
const Signup = () => {
    const[name,setName]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

    const CollectData=()=>{
        console.warn(name,email,password)
    }
  return (
   
    <div className="register_form">
      <h1 className="text-3xl ">Form</h1>
      <div className="second">
      <input className="input_box" type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className="input_box" type="text" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <input className="input_box" type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={CollectData} className="signupbutt">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
