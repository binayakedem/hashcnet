import React from 'react'
import About from '../Components/About'
import Offers from '../Components/Offerings'
import Whyus from '../Components/Whyus'
import Strategicpartner from '../Components/Strategicpartner'
import Uniques from '../Components/Uniques'
import Clients from '../Components/Clients'
import Upcommingproject from '../Components/Upcommingproject'
import Body from '../Components/Body'
import Technology from '../Components/Technology'
const Home = () => {
  return (
    <div className='font-roboto bg-[#545353] overflow-hidden'>
      <Body/>
      <About/>
      <Offers/>
      <Technology/>
      <Uniques/>
      <Whyus/>
      <Strategicpartner/>
      <Upcommingproject/>
      <Clients/>
    </div>
  )
}

export default Home