import React from 'react'
import arrow from '../assets/arrow.png'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Mission = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 text-black':'bg-[#404040] text-black'}>
    <div className='mx-4 md:mx-12 lg:mx-24 py-8 '> 
    <div className='text-center'>
      <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699]'}>Mission and Vision</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 items-center">
        <div className='flex flex-col gap-1 md:gap-10 items-center justify-center '>
            <div className='overflow-hidden h-80 md:h-96 '>
             <img data-aos="zoom-in" data-aos-duration="2000" className='object-cover h-full' src={arrow} alt="arrow shot" />
            </div>
            <div className={theme==='light'?'text-gray-900':'text-[#ffe699]'}>
                <h1 className='font-semibold text-xl md:font-bold md:text-2xl font-play'>Our
                Mission & Vision</h1>
                <hr className='border'/>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
            <h1 className={theme==='light'?'text-gray-800 font-semibold text-lg md:font-bold md:text-xl':'text-[#ffe699] font-semibold text-lg md:font-bold md:text-xl'}>Mission</h1>

            <p className={theme==='light'?'text-gray-800':'text-[#e1e1e1]'}>To deliver comprehensive, reliable, and secure 
technical solutions that empower clients in an 
increasingly connected world.</p>

            <h1 className={theme==='light'?'text-gray-800 font-semibold text-lg md:font-bold md:text-xl':'text-[#ffe699] font-semibold text-lg md:font-bold md:text-xl'}>Vision</h1>

            <p className={theme==='light'?'text-gray-800':'text-[#e1e1e1]'}> To become a leading provider of AAA and customer 
management services that enhance connectivity, 
security, and efficiency</p>

        </div>

    </div>
    </div>
    </div>
  )
}

export default Mission