import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Clients = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // for tablets
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
        <div className='text-center mb-4 md:mb-10'>
          <h1 className={theme === 'light' ? 'font-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900 my-2' : 'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] my-2'}>
            Our Clients
          </h1>
          <hr border="black" />
        </div>
        <div className="slider-container bg-white rounded-sm">
          <Slider {...settings}>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUGC6Ik-o8Rvcp9Zv58tYuEbfpo8KWz7kQQ&s" alt="hp" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://play-lh.googleusercontent.com/nqcxOn_bfOkO7d5JOCOZSTTasFe9qazj236L_Y0koQjxV-iKzMgqiYVNdJvZykqSDpg" alt="juniper" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxXQ1COXWiVmgSFviTesGdYvYXsPlxvnHeA&s" alt="HPE" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://play-lh.googleusercontent.com/V5ZWyP_PYQ0zeG0s2wKgftnoempoNOZJ9JwvoUpRRM-HA4Oom9ixS5v6_UFoHb3X6wQ=w3840-h2160-rw" alt="cg" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ATRO-XP4Q5DVrzxP8MJkBiB0lMYAPRfq4g&s" alt="cg" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TSLsuT8pL8KV8HZjEC23ougUGA1ukRduYw&s" alt="cg" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://img.jobsnepal.com/logos/6069_final_logo.jpg" alt="cg" />
            </div>
            <div className='overflow-hidden hidden h-40 w-60 '>
              <img className='object-fit w-full h-full rounded-lg' src="https://i.pinimg.com/474x/bf/74/f0/bf74f032bbf7d2bae5f87c6fcefd8def.jpg" alt="cg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
