import React from 'react'
import about from '../assets/abouy.png'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const About = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 text-black':'bg-[#404040] text-black'} >

    <div className='mx-4 md:mx-12 lg:mx-24 text-[#e1e1e1]   '>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
            <div>
            <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Who we are..(About Us)</h1>
                <img data-aos='zoom-in' data-aos-duration='1000' src={about}alt=" about page" />
            </div>
            <div data-aos='zoom-in' data-aos-duration='1500' className= {theme==='light'?'flex flex-col gap-4 md:gap-8  p-8 rounded-lg bg-gray-50 text-gray-800':'flex flex-col gap-4  md:gap-8 p-8 rounded-lg '}>
                
                <p > HASH CNET PVT LTD is a leading technology company in Nepal, offering 
comprehensive solutions for ISPs, NSPs, government entities, and 
enterprises. We specialize in providing robust Authentication, 
Authorization, Accounting (AAA), and Customer Management Services, 
ensuring top-quality network performance.</p>
<p >The company was established in 2018 by experienced team of tech 
professionals and managers with more than 15 years of professional 
experience.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About