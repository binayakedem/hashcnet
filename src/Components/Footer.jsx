import React from 'react'
import { FaInstagram , FaFacebook,FaTwitter,FaLinkedin, FaPinterest,FaYoutube ,FaSearchLocation  } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { PiGreaterThanBold } from "react-icons/pi";
import logo from '../assets/logo.png'
import { FaPhone } from "react-icons/fa";
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-300 text-black':'bg-gray-100 text-black'}>

    <div className=' mx-4 md:mx-12 lg:mx-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
                <div className='overflow-hidden h-28'>
                    <img className='h-full w-auto object-cover' src={logo} alt="prabidhi enterprise" />
                </div>
                <div>
                    <h1 className='font-roboto'>Enhancing Experience with enhanced technology.</h1>
                    <NavLink className='text-[#0448AA] font-semibold' to="/about">View More</NavLink>
                    <div className='flex flex-row gap-3 my-4'>
                    <FaInstagram color='red'/>
                    < FaFacebook color='blue'/>
                    < FaTwitter color='blue'/>
                    < FaLinkedin color='blue'/>
                    <  FaPinterest  color='red'/>
                    <  FaYoutube color='red'/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-gray-900 font-play font-semibold text-xl md:font-bold md:text-2xl'>Contact Us</h1>
                    <p className='flex flex-row justify-center gap-2'><FaSearchLocation  size={30} color='blue'/>Shankhamul, Lalitpur</p>
                    <p className='flex flex-row items-center gap-2 hover:text-blue-600 duration-200 ease-in-out cursor-pointer'><IoMailOpenSharp color='red'/>info@hashcnet.com.np</p>
                    <p className='flex flex-row justify-center gap-2'><FaPhone color='green'/> +977 9801001169</p>

                </div>
                <div className='flex flex-col text-blue-600'>
                    <h1 className='font-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900'>Links</h1>
                    <div className='flex flex-row items-center gap-2'>
                        <NavLink to="/about">
                    About
                        </NavLink>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <NavLink to="/mission">
                        Mission
                        </NavLink>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <NavLink to="/contact">
                    Contact Us
                        </NavLink>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <NavLink to="/offer">
                    Offer
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-[#cc9b45]  p-3 text-center'>
            <p>© 2024 Copyright Hash Cnet Pvt.Ltd. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer