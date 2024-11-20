import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import logo from '../assets/logo.png'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
    const[toggle,setToggle]=useState(false)
  return (
    <div className={theme==='light'?'bg-[#fefefe] sticky top-0 left-0 w-full z-50 shadow-md shadow-gray-900':'bg-gray-200 sticky top-0 w-full z-50 shadow-md shadow-gray-900'}>

    <div className='mx-4 md:mx-12 lg:mx-24 '> 
    <div className='flex flex-row justify-between items-center gap-3 px-4'>
        <div className='h-12 md:h-14 overflow-hidden '>
            <NavLink to="/" cursor="pointer"><img className='h-12 md:h-14  object-cover' src={logo} alt="logo" /></NavLink>
        </div>
        <div className='lg:flex hidden lg:flex-row lg:gap-8 text-black lg:font-semibold'>
        <NavLink to='/'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Home
        </NavLink>            
        <NavLink to='/about'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          About
        </NavLink>            
        <NavLink to='/mission'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Mission
        </NavLink>            
        <NavLink to='/offer'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Offers
        </NavLink>            
        <NavLink to='/contact'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Contact
        </NavLink>                       
        </div>
        <div className='lg:flex lg:flex-row hidden'>
            <p  className='flex flex-row justify-center cursor-pointer items-center gap-2 text-lg px-8 py-1  rounded-3xl bg-[#0849A8] text-white hover:bg-[#0849FF] duration-200 ease-in-out'onClick={toggleTheme} >Mode {theme === 'light' ? <FaMoon color='yellow'/> : <FaSun color='yellow'/>}</p>
        </div>
        <div className='flex flex-row lg:hidden text-2xl text-black'>
        <IoReorderThreeSharp onClick={()=>setToggle(!toggle)} />
        </div>
    </div>
    <div className={`bg-[#fefefe] z-50 fixed top-0 right-0 flex flex-col justify-between items-start p-4  md:w-1/2 w-full transform duration-500 ease-in-out ${toggle ? 'translate-x-0' : 'translate-x-[900px]'}`}>
        <div className='flex flex-row w-full justify-between items-center '>
        <div className='h-8 md:h-12 overflow-hidden '>
            <NavLink to="/" cursor="pointer"><img className='h-8 md:h-14  object-cover' src={logo} alt="logo" /></NavLink>
        </div>
        <div className='text-xl text-black'>
        <FaRegWindowClose onClick={()=>setToggle(!toggle)}/>
        </div>
        </div>
        <div className='flex flex-col px-4 mt-3 text-black'>

        <NavLink to='/'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Home
        </NavLink>            
        <NavLink to='/about'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          About
        </NavLink>            
        <NavLink to='/mission'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Mission
        </NavLink>            
        <NavLink to='/contact'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Contact
        </NavLink>                      
   
        <p className='flex flex-row w-full justify-center items-center gap-2  px-4  rounded-3xl bg-[#0849A8] text-white hover:bg-[#0849FF] duration-200 ease-in-out' onClick={toggleTheme} >Mode {theme === 'light' ? 'Dark' : 'Light'}<FaMoon /></p>
        </div>
      
    </div>

    </div>
    </div>
  )
}

export default Navbar