import React from 'react';
import data from '../Data/data'; 
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Technology = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 text-black':'bg-[#3A3737]'}>

    <div className='mx-4 md:mx-12 lg:mx-24 py-8'>
        <div className={theme==='light'?' text-center ont-semibold text-xl md:font-bold md:text-2xl font-play py-8 text-gray-900':' text-center ont-semibold text-xl md:font-bold md:text-2xl py-8 font-play text-[#ffe699]'}>
            <h1 >Technology We Follow</h1>
            <hr className='border  text-[#ffe699]'/>
        </div>
      <div className={theme==='light'?'bg-gray-50 text-black grid grid-cols-1 md:grid-cols-2 gap-6':'bg-[#3A3737] grid grid-cols-1 md:grid-cols-2 gap-6'}>
        {
          data.map((tech) => (
            <div 
            key={tech.id} 
              className='h-96 shadow-black flex flex-col justify-center items-center border border-white shadow-lg rounded-lg overflow-hidden'>
              <div className=' h-72 md:h-96 overflow-hidden '>
                <img data-aos="zoom-in"
     data-aos-duration="2000" className='h-72 md:h-96 object-fit hover:scale-125 duration-700 ease-in-out cursor-pointer' src={tech.picture} alt={tech.name} />
              </div>
              <div className={theme==='light'?'text-gray-900 font-semibold text-xl text-center ':'text-[#ffe699] font-semibold text-xl text-center'}>
                <h1>{tech.name}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
 </div>
  )
}

export default Technology;
