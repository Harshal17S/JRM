import React from "react";
import { Link } from "react-router-dom";
// import './Nav.css'


const Nav = () => {
  return (
    <div className="nav-ul bg-black p-1 text-red-300 text-lg">
      <ul className="flex flex-row gap-4 justify-around">
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
      Header files
    </div>
  );
};

export default Nav;
