import React from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import Photo from './github circular photo.png'


const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="nav-ul bg-black p-1 text-red-300 text-lg">
   
    {/* <img alt='a' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ALEGO_logo.svg&psig=AOvVaw0PD4E6KFIzC2CMJ2T6Goqh&ust=1720804957991000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKD20JPAn4cDFQAAAAAdAAAAABAE' /> */}
    {auth ?
    
      <ul className="flex flex-row gap-4 justify-left">
      <img className=" rounded-full h-10 my-auto" alt="harox" src={Photo}/>
        <li>
          {" "}
          <Link to="/product">Products</Link>
        </li>

        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/profile">{JSON.parse(auth).name}</Link>
        </li>
        <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
          </ul>
        :
        <ul className="flex flex-row gap-4 justify-around ">
        <li>
              <Link to="/signup">Signup </Link>
            </li>
            <li>
              <Link to="/login">Login </Link>
            </li>
            </ul>
    }
        
    </div>
  );
};

export default Nav;
