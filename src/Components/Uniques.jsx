import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Uniques = () => {
    const{theme}=useContext(ThemeContext)
  return (
    <div className={theme==='light'?'bg-gray-50':'bg-[#404040]'}>

    <div className='py-8 mx-4 md:mx-12 lg:mx-24 '>
        <div className='text-center md:my-4 my-2 lg:my-8'>
            <h1 className={theme==='light'?'ont-semibold text-xl md:font-bold md:text-2xl font-play text-gray-900':'ont-semibold text-xl md:font-bold md:text-2xl font-play text-[#ffe699]'}>What makes us Unique</h1>
            <hr border="black"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 lg:gap-8">
            <div className={theme==='light'?'flex flex-col gap-4 bg-gray-50 text-gray-900 p-4 rounded shadow-mdmd':'flex flex-col gap-4 bg-[#252525] p-4 rounded shadow-md'}>
                <div>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl font-roboto text-gray-800':'font-semibold text-lg md:font-bold font-roboto md:text-xl text-[#ffe699]'}>Think Out Of Box</h1>
                    <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Innovation is central to 
everything we do. We 
constantly explore emerging 
technologies, methodologies, 
and best practices to stay 
ahead of the curve and deliver 
impactful solutions for our 
clients. Whether utilizing AI, 
IoT we are dedicated to 
pushing the boundaries of 
what’s possible.</p>
                </div>
                <div>
                    <img data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" src="https://static.vecteezy.com/system/resources/previews/011/649/645/original/think-out-of-the-box-3d-render-icon-illustration-png.png" alt="unique" />
                </div>

            </div>
            {/* customer first approach */}
            <div data-aos="flip-right" data-aos-duration="2000"  className={theme==='light'?'flex flex-col gap-4 bg-gray-50 text-gray-900 p-4 rounded shadow-md':'flex flex-col gap-4 bg-[#252525] p-4 rounded shadow-md'}>
                <div>
                    <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl font-roboto text-gray-800':'font-semibold text-lg md:font-bold font-roboto md:text-xl text-[#ffe699]'}>CustomerFirst  
                    Approach</h1>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--buyer-consumer-shop-shopping-delivery-and-logistics-pack-e-commerce-icons-6478868.png?f=webp" alt="unique" />
                </div>
                <div>
                    <p >We are committed to providing an 
outstanding customer experience 
at every stage. From the first 
consultation to post
implementation support, our goal 
is to exceed client expectations 
with responsive, proactive, and 
personalized service.</p>
                </div>

            </div>

            {/* transformative information */}
            <div  className={theme==='light'?'flex flex-col gap-4 bg-gray-50 text-gray-900 p-4 rounded shadow-md':'flex flex-col gap-4 bg-[#252525] p-4 rounded shadow-md'}>
                <div>
                <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl font-roboto text-gray-800':'font-semibold text-lg md:font-bold font-roboto md:text-xl text-[#ffe699]'}>Transformative  
                Leadership</h1>
                    <p  data-aos="flip-up" data-aos-duration="2000"> As industry veterans, we are 
dedicated to sharing our 
CustomerFirst  
Approach
 knowledge, insights, and expertise 
with the broader community. We 
engage in transformative initiatives 
through whitepapers, webinars, and 
industry events to drive 
technological advancement across 
various domains.</p>
                </div>
                <div>
                    <img data-aos="flip-right" data-aos-duration="2000" src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-with-successful-leadership-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--leader-success-business-and-investment-pack-illustrations-5438367.png" alt="unique" />
                </div>

            </div>


{/* result oriented delivery
 */}
 <div data-aos="zoom-in-down" data-aos-duration="2000" className={theme==='light'?'flex flex-col gap-4 bg-gray-50 text-gray-900 p-4 rounded shadow-md':'flex flex-col gap-4 bg-[#252525] p-4 rounded shadow-md'}>
                <div>
                    <h1 className={theme==='light'?'font-semibold text-lg md:font-bold md:text-xl font-roboto text-gray-800':'font-semibold text-lg md:font-bold font-roboto md:text-xl text-[#ffe699]'}>Result Oriented  
                    Delivery</h1>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/business-goal-with-trophy-5744089-4817282.png?f=webp" alt="unique" />
                </div>
                <div>
                    <p> Our success is defined by the 
real results we achieve for our 
clients. Whether it's improving 
efficiency, reducing costs, 
driving revenue growth, or 
enhancing competitive 
advantage, we focus on 
delivering measurable 
outcomes that positively impact 
our clients' bottom line.
</p>
                </div>

            </div>
        </div>
    </div>
 </div>
  )
}

export default Uniques