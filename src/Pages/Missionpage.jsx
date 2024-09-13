import React from 'react'
import Mission from '../Components/Mission'
const Missionpage = () => {
  return (
    <div>
        <div
  className='text-center flex flex-col h-60 md:h-80 w-full justify-center items-center bg-cover bg-center'
  style={{ backgroundImage: "url('https://www.shutterstock.com/image-illustration/vision-concept-business-3d-illustration-260nw-2492956779.jpg')" }}
>
  <h1 className='font-bold text-3xl text-white'>
    Mission and
  </h1>
  <h1 className='text-[#ffe699] font-bold text-3xl'>
    Vision!
  </h1>
</div>
<Mission/>
    </div>
  )
}

export default Missionpage