import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Aaacrm = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-100 text-black font-roboto':'bg-[#404040] font-roboto'}>
          <div
  className='text-center flex flex-col h-60 md:h-80 w-full justify-center items-center bg-cover bg-center'
  style={{ backgroundImage: "url('https://www.shutterstock.com/image-illustration/vision-concept-business-3d-illustration-260nw-2492956779.jpg')" }}
>
  <h1 className='font-semibold text-xl md:font-bold md:text-2xl font-play text-white'>
    We
  </h1>
  <h1 className='text-[#ffe699] font-semibold text-xl md:font-bold md:text-2xl font-play'>
    Offer!
  </h1>
</div>

    <div className='py-8 mx-4 md:mx-12 lg:mx-24 flex flex-col gap-10 '>
        <div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>AAA Solution: The Backbone of 
                Nepal's Digital Infrastructure</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
            
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://www.shutterstock.com/image-vector/seo-optimization-web-analytics-marketing-600nw-2011910036.jpg" alt="service" />
            </div>
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Comprehensive Multi-Services</h1>
                <p> Provides robust AAA services integrated with advanced Customer Management systems.</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Scalable and Flexible</h1>
                <p> Designed to adapt to the growing needs of NSPs, ISPs, and enterprises</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>  Security and Reliability</h1>
                <p>  Delivers high-level security protocols to safeguard user data and network integrity .</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Enhanced Performance</h1>
                <p>  Boosts the quality of service for clients by providing comprehensive AAA solutions</p>
            </div>

        </div>
        {/* now start for the networking solution tailored for your success */}
        <div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Networking Solutions: Tailored for  Your Success</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Professional Network Services</h1>
                <p> Our network design, implementation, and support services are  customized to meet the unique needs of your business</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Certified Expertise</h1>
                <p>  Our team of Microsoft, Juniper, and Cisco certified engineers guarantees the highest level of technical competence for all your network requirements.</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>  Comprehensive Network Solution</h1>
                <p>  Our expertise spans firewalls, VPNs, remote access, and wireless network planning, integration, and support</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Advanced Security</h1>
                <p>   We provide comprehensive protection against the latest technology threats, ensuring the safety and integrity of your network.</p>
            </div>
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://static.vecteezy.com/system/resources/previews/023/875/852/original/5g-mobile-internet-network-service-concept-3d-lettering-of-5g-on-smartphone-with-wifi-signal-for-used-as-advertising-banner-or-poster-design-vector.jpg" alt="service" />
            </div>

        </div>
        {/* here start for Data Center Solutions: Reliability
 and Scalability */}
 <div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Data Center Solutions: Reliability and Scalability</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://www.shutterstock.com/image-illustration/3d-render-data-technology-center-600nw-2291084033.jpg" alt="service" />
            </div>
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Custom Data Center Design</h1>
                <p>  Our data center designs are tailored to your specific business needs and future growth plans, ensuring optimal performance and scalability</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Installation and Management</h1>
                <p> We provide end-to-end services, from setting up infrastructure to ongoing management and maintenance, maximizing uptime and minimizing downtime</p>
            </div>

        </div>
        {/* here start for Total WiFi Solution: 
Seamless Connectivity */}
 <div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Total WiFi Solution: 
                Seamless Connectivity</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> End-to-End WiFi Deployment</h1>
                <p>  We design and deploy secure, reliable, and high-speed 
WiFi networks for enterprises, public spaces, and 
residential areas, providing seamless connectivity</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Optimized Connectivity</h1>
                <p> We ensure consistent connectivity across all devices 
and locations, maximizing user experience and 
productivity</p>
            </div>
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://st.depositphotos.com/11486624/56574/i/450/depositphotos_565747940-stock-photo-wifi-mobile-communication-wireless-network.jpg" alt="service" />
            </div>

        </div>
        {/* here start for Endpoint Security: Comprehensive 
Device Protection */}
<div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Endpoint Security: Comprehensive 
                Device Protection</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://media.istockphoto.com/id/1367728820/vector/endpoint-security-endpoint-protection-multiple-devices-protected-within-a-network-3d.jpg?s=612x612&w=0&k=20&c=9k3P3UzdLHx33aThbPAFNUeRchTIKiklW05XbBc3uvE=" alt="service" />
            </div>
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>  Comprehensive Device Protection</h1>
                <p> We ensure that all devices connected to your network are 
protected against potential threats and vulnerabilities, 
safeguarding your data and operations</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Real-Time Monitoring</h1>
                <p> Our security solutions provide constant surveillance to detect 
and neutralize security risks at the endpoint level, ensuring 
proactive threat mitigation</p>
                       </div>

        </div>
        {/* here start for Smart Home Solutions: 
Connected Living Spaces */}
<div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Smart Home Solutions: 
                Connected Living Spaces</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Connected Living Spaces</h1>
                <p>  Providing smart home technologies that enhance convenience, 
security, and energy efficiency, creating a truly connected living 
experience.</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Customized Solutions</h1>
                <p> We tailor smart home setups to individual needs, seamlessly 
integrating with existing systems for a cohesive and 
personalized user experience.
</p>
                            </div>
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://www.shutterstock.com/image-vector/smart-home-security-system-concept-260nw-1115885546.jpg" alt="service" />
            </div>

        </div>
        {/* here start for Network Security Intelligence: 
Advanced Threat Detection and 
Proactive Defense */}
<div className=''>
                <h1 className={theme==='light'?'font-semibold text-xl md:font-bold md:text-2xl  text-gray-900 font-play ':'font-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699] '}>Network Security Intelligence: 
Advanced Threat Detection and 
Proactive Defense</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className='overflow-hidden rounded-sm shadow-md cursor-pointer  shadow-gray-800'>
                <img  data-aos="zoom-in-down" data-aos-duration="1200" className='object-cover h-full w-full hover:scale-125 duration-700 ease-in-out' src="https://img.freepik.com/premium-photo/ai-robot-using-cyber-security-protect-information-privacy-futuristic-concept-cybercrime-prevention-by-artificial-intelligence-machine-learning-process-3d-rendering-illustration_967785-54709.jpg" alt="service" />
            </div>
            <div data-aos="fade-up"
      duration="1000"  className={theme==='light'?'flex flex-col gap-4  p-8 rounded-lg bg-gray-50':'flex flex-col gap-4  p-8 rounded-lg '}>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}> Advanced Threat Detection</h1>
                <p> We utilize cutting-edge technology to identify and 
mitigate potential network security threats, ensuring a 
proactive defense strategy</p>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl text-gray-800 fontpl':'font-semibold text-lg md:font-bold md:text-xl text-[#ffe699]'}>Proactive Defense Mechanisms</h1>
                <p> We implement intelligent security systems that adapt 
to evolving threats and maintain network integrity, 
ensuring robust protection.
</p>            </div>

        </div>
    </div>
</div>
  )
}

export default Aaacrm