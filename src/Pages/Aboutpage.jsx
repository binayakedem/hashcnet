import React from 'react'
import about from '../assets/abouy.png'
import About from '../Components/About'
import Journey from '../Components/Journey'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Aboutpage = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-[#F3F4F6] text-black':'bg-[#3A3737]'}>
      <div
  className='text-center flex flex-col h-60 md:h-80 w-full justify-center items-center bg-cover bg-center'
  style={{ backgroundImage: "url('https://www.shutterstock.com/image-illustration/vision-concept-business-3d-illustration-260nw-2492956779.jpg')" }}
>
  <h1 className='font-bold text-3xl text-white'>
    About 
  </h1>
  <h1 className='text-[#ffe699] font-bold text-3xl'>
    Us!
  </h1>
</div>

    <About/>
    <Journey/>
    </div>
  )
}

export default Aboutpage