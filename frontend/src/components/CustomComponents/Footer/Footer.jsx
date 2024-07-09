import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
  
    
    <div  className="footer">
      {/* <h1>Harshal</h1>
      
      <h1>Harshal</h1> */}
      <ul className="design flex flex-row gap-4 justify-around ">
        <li>
          <Link to="/">Products</Link>  
        </li>

        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>

      </ul>
    </div>
   

    );};
 
    
  
    

export default Footer;
