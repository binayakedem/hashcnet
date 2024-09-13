import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Upcommingproject = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100':'bg-[#404040]'}>
    <div className='py-8 mx-4 md:mx-12 lg:mx-24'>
        <div className='text-center md:py-6 py-3 lg:py-8'>
            <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900 my-2':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] my-2'}>Upcoming Projects</h1>
            <hr border="black"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 lg:gap-8">
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1500" className={theme==='light'?'flex flex-col md:gap-4 gap-2 lg:gap-8 bg-gray-50 p-6 shadow-md rounded':'flex flex-col md:gap-4 gap-2 lg:gap-8 p-6 shadow-md'}>
                <h1  className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900 ':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> DWDM Service Migration Support</h1>
                <p className={theme==='light'?'text-gray-800':''}>Yearly support for the Government-owned Integrated Data Management Center in Singhadarbar</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-900 ':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> HMS Installation</h1>
                <p className={theme==='light'?'text-gray-800':''}> 2-3 ISPs/corporate houses on migration phase for HMS installation.</p>
            </div>
            <div>
                <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000" className='hover:scale-125 duration-300 ease-in-out cursor-pointer' src="https://cdn3d.iconscout.com/3d/premium/thumb/hospital-3d-icon-download-in-png-blend-fbx-gltf-file-formats--clinic-doctor-emergency-building-medical-pack-healthcare-icons-9571354.png" alt="project" />
            </div>

        </div>

    </div>
    </div>
  )
}

export default Upcommingproject