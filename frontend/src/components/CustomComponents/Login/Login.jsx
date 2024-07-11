import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

   const login=async()=>{
    console.warn(email,password)
    let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
      result = await result.json();

      if(result.name){
        localStorage.setItem('user',JSON.stringify(result));
        navigate("/");
      }
      else{
        alert("Please Enter correct mail/password")
      }

    }

    return(
        <div className="register_form">
         <h1 className="h1tag text-3xl ">Form</h1>
      <div className="second">
      <input
          className="input_box"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          
        />
        <input
          className="input_box"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={login} className="signupbutt  text-red-300">
          Login
        </button>
      </div>
        </div>

    );
};

export default Login;