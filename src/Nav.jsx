import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); 

let menuRef= useRef();


  const handleMenuToggle = () => {
    setIsOpen(!isOpen); 
  };
  
   
   
  

  return (
    <nav className="bg-indigo-50 sm:p-2 px-2 py-2  z-999 overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src="" alt="shivanshu" className="h-12 text-red-700" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-list hidden sm:flex sm:flex-row justify-center items-center space-x-6 bg-blue-600 py-4 px-4 rounded-full">
          <li>
            <NavLink to="/" className="navbar-link text-white font-medium text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link text-white font-medium text-lg">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link text-white font-medium text-lg">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link text-white font-medium text-lg">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side: Login and Cart */}
        <div className="flex flex-row items-center space-x-6">
          <NavLink to="/login" className="hidden sm:block text-black font-medium text-lg">
            Login
          </NavLink>
          <NavLink to="/cart" className=" cart-trolley--link px-3 flex flex-row">
            <FiShoppingCart className="text-xl" />
            <span className="cart-total--item text-xs text-slate-400">9</span>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <button className="sm:hidden px-2" onClick={handleMenuToggle}>
            {isOpen ? <RxHamburgerMenu className="text-2xl text-black" /> : <RxHamburgerMenu className="text-2xl text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={  ` sm:hidden fixed top-0 right-0 w-3/4 h-1/2 bg-blue-500 backdrop-blur  rounded-bl-full  transition-transform duration-300 transform ${
          isOpen ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between items-center p-4">
            <NavLink to="/">
              <img src="" alt="shivanshu" className="h-12 text-red-700" />
            </NavLink>
            <button className="px-2" onClick={handleMenuToggle}>
              <IoIosCloseCircleOutline className="text-2xl text-black" />
            </button>
          </div>

          {/* // mobile links  */}
          <ul className="flex flex-col justify-center items-center py-2 px-4 space-y-3">
            <li>
              <NavLink to="/" className="navbar-link-mob text-white font-medium text-lg" onClick={handleMenuToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navbar-link-mob text-white font-medium text-lg" onClick={handleMenuToggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="navbar-link-mob text-white font-medium text-lg" onClick={handleMenuToggle}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbar-link-mob text-white font-medium text-lg" onClick={handleMenuToggle}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navbar-login-mob text-white font-medium text-lg" onClick={handleMenuToggle}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
