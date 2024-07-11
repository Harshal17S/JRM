import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const CollectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div className="register_form">
      <h1 className="h1tag text-3xl ">Form</h1>
      <div className="second">
        <input
          className="input_box"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input_box"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="input_box"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={CollectData} className="signupbutt  text-red-300">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
