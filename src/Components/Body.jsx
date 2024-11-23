import React, { useState, useEffect } from 'react';

const slides = [
  'https://www.shutterstock.com/image-illustration/futuristic-data-center-turned-on-600nw-2291084029.jpg',
  'https://img.pikbest.com/wp/202346/computer-network-abstract-networking-visualization-in-a-3d-rendering_9724955.jpg!bw700',
  'https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-creating-3d-renderings-for-mobile-apps-software-and-web-development-image_3826852.jpg',
  'https://thumbs.dreamstime.com/b/service-provider-internet-network-business-connect-vector-93379125.jpg'
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative  h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      ))}
      <div className=" relative z-10 flex items-center  h-full bg-black bg-opacity-20">
        <div className='mx-4 md:mx-12 lg:mx-24'>
          
        <h1 className="text-white font-bold z-20  lg:text-3xl md:text-xl text-lg font-roboto ">We Are <span className='text-blue-500'>Leading </span>Solution Provider</h1>
        <h1 className="text-white font-bold z-20  lg:text-3xl md:text-xl text-lg font-roboto ">for ISPs, NSPs, government entities, and enterprises</h1>
        <h1 className="text-white font-bold z-20  lg:text-3xl md:text-xl text-lg font-roboto ">Agency.</h1>
          <button className='bg-[#0849A8] text-white px-6 py-2 mt-10 font-semibold md:text-lg'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
