import React from 'react'
import { MdHeadset } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
const Secondarynav= () => {
    return (
        <div className='bg-[#ffe699] flex flex-row items-center justify-center text-black w-[100vw] font-sans text-sm font-normal pt-[1px] pb-[0.5px]'>
            <div className=' flex flex-row justify-between  items-center w-[74vw] py-[10px]'>
                <div className='md:hidden hidden lg:flex lg:flex-row '>
                    <p className='flex flex-row font-sans '><MdHeadset color='blue' className='mt-1 mr-1' size={16} /><span>24x7 Technical Support</span></p>
                    <p className='flex flex-row font-sans ml-4'><FaPhone color='green' className="flex flex-row items-center justify-center mt-1 mr-1" size={13} /><span> +977 9801001168</span></p>

                </div>
                <div className='flex flex-row  lg:flex lg:flex-row'>
                    <span className='mx-2'><FaInstagram  color='red'/></span>
                    <span className='mx-2'><FaFacebookF color='blue'/></span>
                    <span className='mx-2'><FaTwitter color='blue'/></span>
                    <span className='mx-2'><FaLinkedinIn color='blue'/></span>
                    <span className='mx-2'><FaPinterest color='red' /></span>
                    <span className='mx-2'><FaYoutube color='red' /></span>
                    
                </div>
            </div>

        </div>
    )
}

export default Secondarynav
