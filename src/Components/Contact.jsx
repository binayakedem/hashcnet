import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram , FaFacebook,FaTwitter,FaLinkedin, FaPinterest,FaYoutube ,FaSearchLocation  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const Contact = () => {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={theme==='light'?'bg-gray-100 text-gray-900 font-play':'bg-[#404040]  font-play'}>
      <div
  className='text-center flex flex-col h-60 md:h-80 w-full justify-center items-center bg-cover bg-center'
  style={{ backgroundImage: "url('https://www.vis.qa/wp-content/uploads/2022/09/contact-the-admisssions-1-2-scaled.jpg')" }}
>
  <h1 className='font-bold text-3xl text-white'>
    Let us be your
  </h1>
  <h1 className='text-[#cc9b45] font-bold text-3xl'>
    innovation partner!
  </h1>
</div>

      <div className='mx-4 md:mx-12 lg:mx-24 py-3 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
          <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className={theme==='light'?'flex flex-col gap-5  shadow-gray-500 shadow-md bg-gray-50 p-4 rounded-md':'flex flex-col gap-5 '}>
            <div>
            <h1 className= {theme==='light'?' text-gray-900 font-play mt-6 flex flex-row underline justify-start items-center gap-2 font-bold text-2xl pb-4':'mt-6 flex flex-row justify-start items-center gap-2 font-bold text-lg md:text-2xl text-[#ffe699]'}>Contact Us</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <input className='border rounded-md p-2' type="text" placeholder='First Name' />
              <input className='border rounded-md p-2' type="text" placeholder='Last  Name' />
            </div>
            <input className='border rounded-md p-2' type="email" placeholder='Email' />
            <input className='border rounded-md p-2' type="number" placeholder='Phone' />
            <input className='border rounded-md p-6' type="textarea" placeholder='Your message' />
            <div className='flex flex-row justify-center items-center'>
            <button className='px-2 rounded-md p-2 font-semibold py-4 font-play bg-blue-600 text-white hover:bg-blue-700 w-1/3 duration-300 ease-in-out'>Send</button>
            </div>
          </div>
            <div className='text-gray-700'>
          <div className={theme==='light'?'bg-gray-100 text-black mt-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl':'mt-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#ffe699]'}>
          <FaLocationDot /> <h1>Our Details</h1>
          </div>
          <hr className='w-full border border-black my-4'/>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className='flex flex-row gap-3 items-center'>
            <FaLocationDot color='blue'/> <p className= {theme==='light'?' text-gray-950':'text-[#e1e1e1]'}>Shankhamul Lalitpur, Nepal</p>
            </div>
            <div className='flex flex-row gap-3 items-center my-1 text-[#ffe699]'>
            <MdAttachEmail color='red' />
              <p className={theme==='light'?' text-gray-950':'text-[#e1e1e1]'}>info@hashcnet.com.np</p>
            </div>
            <div className='flex flex-row gap-3 items-center my-1 text-[#ffe699]'>
            <FaPhone color='green'/>
              <p className={theme==='light'?' text-gray-950':'text-[#e1e1e1]'}> +977 9801001168</p>
            </div>
            <div className='flex flex-row gap-3 my-2 text-[#ffe699]'>
              <FaInstagram  color='red' cursor="pointer"/>
                    < FaFacebook color='blue' cursor="pointer"/>
                    < FaTwitter color='blue' cursor="pointer"/>
                    < FaLinkedin color='blue' cursor="pointer"/>
                    <  FaPinterest color='red'cursor="pointer" />
                    <  FaYoutube color='red'cursor="pointer"/>
            </div>
            <div className='overflow-hidden h-80 my-4'>
            <div className="w-full h-screen">
      <iframe
        title="Google Map"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8944.458963513298!2d85.3333434!3d27.6802832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191eca39e345%3A0x75a60c18c9eaa814!2sHASH%20CNET%20PVT.%20LTD.!5e1!3m2!1sen!2snp!4v1726110365156!5m2!1sen!2snp"
      ></iframe>
    </div>
            </div>

          </div>
          
        </div>


          <div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Contact;
