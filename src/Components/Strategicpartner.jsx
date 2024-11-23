import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Strategicpartner = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // for tablets and smaller devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={theme === 'light' ? 'bg-gray-100' : 'bg-[#404040]'}>
      <div className='py-8 mx-8 md:mx-12 lg:mx-24'>
        <div className='text-center my-4 md:my-10'>
          <h1 className={theme === 'light' ? 'font-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900 my-2' : 'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] my-2'}>
            Our Strategic Partners
          </h1>
          <hr border="black" />
        </div>
        <div className="slider-container bg-white  rounded-sm ">
          <Slider {...settings} >
            <div className=' overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://c4.wallpaperflare.com/wallpaper/504/641/289/computers-hp-wallpaper-preview.jpg" alt="hp" />
            </div>
            <div className=' overflow-hidden hidden h-40 w-60  '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gP4e6d3FYtX8vMriPYJnJP2KCAS_AVJ6XA&s" alt="huwai" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60   '>
              <img className='object-fit w-full h-full rounded-lg' src="https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png" alt="cisco" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60   '>
              <img className='object-fit w-full h-full rounded-lg' src="https://cdn.worldvectorlogo.com/logos/juniper-networks.svg" alt="juniper" />
            </div>
            <div className=' overflow-hidden hidden h-40 w-52  '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxXQ1COXWiVmgSFviTesGdYvYXsPlxvnHeA&s" alt="HPE" />
            </div>
            <div className=' overflow-hidden hidden h-40 w-60  '>
              <img className='object-fit w-full h-full rounded-lg' src="https://techpana.prixacdn.net/media/gadgets/cgnet-price-in-nepal.jpg" alt="cg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Strategicpartner;
