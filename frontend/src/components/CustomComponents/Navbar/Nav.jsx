import React from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
// import './Nav.css'

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="nav-ul bg-black p-1 text-red-300 text-lg">
      <ul className="flex flex-row gap-4 justify-around">
        <li>
          {" "}
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
          {" "}
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Signup </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
