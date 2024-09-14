import React from 'react'
import integrity from '../assets/integrity.png'
import reliability from '../assets/reliability.png'
import quality from '../assets/quality.png'
import innovation from '../assets/innovation.png'
import centric from '../assets/centric.png'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Whyus = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 py-2 md:py-8':'bg-[#404040] py-2 md:py-8'}>
    <div className='mx-4 md:mx-12 lg:mx-24   '> 
<div className='text-center py-8'>
        <h1 className={theme==='light'?'ont-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900':'ont-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699]'}>Why Choose Us?</h1>
        <hr />

    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8'>
        <div data-aos="zoom-in" data-aos-duration="1000" className='bg-[#fefefe] p-5 shadow-black shadow-md rounded-lg flex flex-col gap-4'>
            <div className='overflow-hidden h-20'>
                <img className='h-full object-cover' src={integrity} alt="integrity" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-lg md:font-bold md:text-xl text-[#000000]'>Integrity</h1>
                <p className='text-gray-900'> Upholding the highest standards 
                of professionalism and ethical 
                 conduct in all business dealings</p>
            </div>
        </div>
        <div data-aos="zoom-out" data-aos-duration="1800" className='bg-[#fefefe] p-5 shadow-black shadow-md rounded-lg flex flex-col gap-4'>
            <div className='overflow-hidden h-20'>
                <img className='h-full object-cover' src={reliability} alt="integrity" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-lg md:font-bold md:text-xl text-[#000000]'>Reliability</h1>
                <p className='text-gray-900'>  Trust and 
dependability are 
cornerstones of our 
business
 Integrity
 </p>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000" className='bg-[#fefefe] p-5 shadow-black shadow-md rounded-lg flex flex-col gap-4'>
            <div className='overflow-hidden h-20'>
                <img className='h-full object-cover' src={quality} alt="integrity" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-lg md:font-bold md:text-xl text-[#000000]'>Sevice Quality</h1>
                <p className='text-gray-900'>  We are committed to 
delivering the highest 
quality of service, 
exceeding industry 
standards</p>
            </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2400" className='bg-[#fefefe] p-5 shadow-black shadow-md rounded-lg flex flex-col gap-4'>
            <div className='overflow-hidden h-20'>
                <img className='h-full object-cover' src={innovation} alt="integrity" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-lg md:font-bold md:text-xl text-[#000000]'>Innovation</h1>
                <p className='text-gray-900'> We continuously innovate to 
stay ahead of technological 
advancements</p>
            </div>
        </div>
        <div data-aos="zoom-in"
      data-aos-duration="2800" className='bg-[#fefefe] p-5 shadow-black shadow-md rounded-lg flex flex-col gap-4'>
            <div className='overflow-hidden h-20'>
                <img className='h-full object-cover' src={centric} alt="integrity" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-lg md:font-bold md:text-xl text-[#000000]'>Customer Centric</h1>
                <p className='text-gray-900'> Client needs are 
at the heart of everything 
we do, prioritizing success 
with tailored solutions</p>
            </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Whyus