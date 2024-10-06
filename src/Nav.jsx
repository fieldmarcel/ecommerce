import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="bg-indigo-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src="" alt="shivanshu" className="h-12 text-red-700" />
          </NavLink>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="flex flex-row justify-center items-center space-x-6 bg-gray-200 py-2 px-4 rounded-full">
          <li>
            <NavLink to="/" className="text-black font-medium text-lg">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-black font-medium text-lg">About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="text-black font-medium text-lg">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-black font-medium text-lg">Contact</NavLink>
          </li>
        </ul>

        {/* Right Side: Login and Cart */}
        <div className="flex flex-row items-center space-x-6">
          <NavLink to="/login" className="text-black font-medium text-lg">Login</NavLink>
          <NavLink to="/cart" className="    navbar-link cart-trolley--link flex flex-row">
            <FiShoppingCart className="text-xl" />
            <span className="cart-total--item text-xs text-slate-400"> 9</span>
          </NavLink>
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
