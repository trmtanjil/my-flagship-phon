import React from 'react';
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import {  NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px12 lg:px-16 xl:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" cursor-pointer btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({isActive})=>isActive ? 'text-green-600': ''}> Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>isActive ? 'text-green-600': ''}> About</NavLink></li>
            <li className='flex items-center justify-center'><NavLink to="/cart" className={({isActive})=>isActive ? 'text-green-600': ''}> <IoMdCart size={20} /></NavLink></li>
            <li className='flex items-center justify-center'><NavLink to="/favoriute" className={({isActive})=>isActive ? 'text-green-600': ''}>  <MdBookmarkAdd  size={20} /> </NavLink></li>
            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost text-xl">daisyUI</NavLink>
        </div>
        <div className="navbar-end">

        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1">   
            <li><NavLink to="/" className={({isActive})=>isActive ? 'text-green-600': ''}> Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>isActive ? 'text-green-600': ''}> About</NavLink></li>
            <li className='flex items-center justify-center'><NavLink to="/cart" className={({isActive})=>isActive ? 'text-green-600': ''}> <IoMdCart size={20} /></NavLink></li>
            <li className='flex items-center justify-center'><NavLink to="/favoriute" className={({isActive})=>isActive ? 'text-green-600': ''}>  <MdBookmarkAdd  size={20} /> </NavLink></li>
          </ul>
        </div>
        </div>
      </div>
    );
};

export default Navbar;