import React from 'react'
import offers from '../assets/offers.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Offerings = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 text-black':'bg-[#3A3737]'}>

    <div className='py-8 mx-4 md:mx-12 lg:mx-24   '>
        <div className='text-center py-4 md:py-6 lg:py-8'>
            <h1 className={theme==='light'?'ont-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900':'ont-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699]'}>Hash Net’s Flagship Offerings</h1>
            <hr border="black"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  items-center ">
            <div data-aos='zoom-in-right' data-aos-duration='1000' className='flex flex-col gap-4 font-roboto'>
                <h1 className= {theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>AAA with CRM</h1>
                <p> • Comprehensive Multi-Services </p>
                <p> • Security and Reliability</p>
                <p> • Scalable and Flexible</p>
                <p> • Enhanced Performance</p>
                <NavLink className="bg-blue-600 text-white p-3 w-1/2 rounded hover:bg-blue-700 duration-200 hover:scale-105" to='/aaacrm'>Explore More..</NavLink>
                <h2 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Cloud Solution</h2>
                <p> • Scalable Cloud Infrastructures</p>
                <p> • Data Storage and Management</p>
                <p>• Disaster Recovery</p>
                <p> • 24/7 Support & Monitoring</p>
                <NavLink className="bg-blue-600 text-white p-3 w-1/2 rounded hover:bg-blue-700 duration-200 hover:scale-105" to='/aaacrm'>Explore More..</NavLink>
            </div>
            <div className='overflow-hidden'>
                <img data-aos='zoom-in' data-aos-duration='1500' className='object-cover h-full w-full cursor-pointer hover:scale-110 duration-500' src={offers} alt="offers" />
            </div>
            <div data-aos='zoom-in-left' data-aos-duration='2000' className='flex flex-col gap-4  '>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Network Solutions</h1>
                <p> •  Professional Network Services </p>
                <p> • Certificate Expertise</p>
                <p> • Comprehensive Network Solutions</p>
                <p> • Advanced Security</p>
                <NavLink className="bg-blue-600 text-white p-3 w-1/2 rounded hover:bg-blue-700 duration-200 hover:scale-105" to='/aaacrm'>Explore More..</NavLink>
                <h2 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Data Centers</h2>
                <p> •  Custom Data Center Design</p>
                <p> • Installation and Management</p>
                <p>• End-to-end Deployment</p>
                <p> • High Availability and Reducdancy</p>
                <p> • Energy-efficient operations </p>
                <NavLink className="bg-blue-600 text-white p-3 w-1/2 rounded hover:bg-blue-700 duration-200 hover:scale-105" to='/aaacrm'>Explore More..</NavLink>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Offerings