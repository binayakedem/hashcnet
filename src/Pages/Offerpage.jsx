import React from 'react'
import Offerings from '../Components/Offerings'

const Offerpage = () => {
  return (
    <div>
        <div
  className='text-center flex flex-col h-60 md:h-80 w-full justify-center items-center bg-cover bg-center'
  style={{ backgroundImage: "url('https://img.pikbest.com/wp/202405/shop-features-3d-illustration-of-online-shopping-app-featuring-e-commerce-smartphone-and-promotion-icons_9852103.jpg!sw800')" }}
>
  <h1 className='font-bold text-3xl text-white'>
    Special 
  </h1>
  <h1 className='text-[#ffe699] font-bold text-3xl'>
    Offer!
  </h1>
</div>
        <Offerings/>
    </div>
  )
}

export default Offerpage