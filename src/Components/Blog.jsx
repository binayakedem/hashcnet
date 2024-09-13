import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const Blog= () => {
  const {theme}=useContext(ThemeContext)
  const data=[
    {
      "id": 1,
      "image": "https://www.wgu.edu/career-guide/business/sales-rep-career/_jcr_content/root/columncontrol_copy_c/column-2/image_copy_101282280.coreimg.85.800.jpeg/1704506383811/achieve-job-security-in-uncertain-world.jpeg",
      "title": "The Future of AI in Business",
      "sub_heading": "Exploring the Impact of Artificial Intelligence",
      "paragraph": "Artificial Intelligence (AI) is rapidly transforming the business landscape. From automation to advanced analytics, AI is providing businesses with new tools to improve efficiency and innovation. In this blog, we explore the current trends and future potential of AI in various industries. We discuss how AI-powered technologies such as machine learning, natural language processing, and robotic process automation are being utilized to streamline operations, enhance customer experiences, and drive growth. Additionally, we examine the ethical considerations and challenges associated with AI adoption, including data privacy concerns and the need for transparent AI governance.",
      "date": "2024-05-10",
      "type": "Business, Technology"
    },
    {
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgceamVXzIrvr0M_ggRAVvFkpPqbxwmZPU02qiBqmTb49AeGRUOpQWzksBgzWSLMQedE&usqp=CAU",
      "title": "Sustainable Practices in Modern Companies",
      "sub_heading": "Embracing Eco-friendly Business Strategies",
      "paragraph": "Sustainability is no longer a niche concern; it is a business imperative. Companies are increasingly adopting eco-friendly practices to reduce their environmental footprint and meet consumer demands for green products. This blog discusses effective strategies for sustainability in today's corporate world. We delve into the benefits of sustainable practices, such as cost savings, improved brand reputation, and compliance with regulations. Furthermore, we highlight case studies of companies that have successfully implemented sustainability initiatives, demonstrating how they have reduced waste, conserved energy, and supported local communities.",
      "date": "2024-04-22",
      "type": "Business, Environment"
    },
    {
      "id": 3,
      "image": "https://media.istockphoto.com/id/638883904/photo/man-giving-curriculum-in-a-job-interview.jpg?s=612x612&w=0&k=20&c=cn9XbUXrQXuh7QMG4khAJzwtoKmMqJRWUCjPJ3DmvKw=",
      "title": "The Importance of Cybersecurity",
      "sub_heading": "Protecting Your Business in the Digital Age",
      "paragraph": "In an era where data breaches and cyber attacks are on the rise, cybersecurity has become a top priority for businesses. This blog highlights the key measures companies can take to safeguard their data and protect their digital infrastructure from malicious threats. We discuss the latest cybersecurity trends and best practices, including the use of advanced encryption, multi-factor authentication, and regular security audits. Additionally, we explore the importance of employee training and awareness programs to prevent phishing attacks and other social engineering tactics. By implementing robust cybersecurity protocols, businesses can mitigate risks and ensure the integrity of their sensitive information.",
      "date": "2024-03-15",
      "type": "Business, Technology"
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sadryOaI7yHodQqKWllhXnW3a5SsOAdTzQ&usqp=CAU",
      "title": "Remote Work: The New Normal",
      "sub_heading": "Adapting to a Remote Workforce",
      "paragraph": "The COVID-19 pandemic has accelerated the shift towards remote work, leading to significant changes in how businesses operate. This blog examines the benefits and challenges of remote work and provides tips for effectively managing a remote team. We explore the advantages of remote work, such as increased flexibility, reduced commute times, and improved work-life balance. Additionally, we address the challenges, including maintaining team cohesion, managing productivity, and ensuring effective communication. By leveraging technology and adopting best practices, companies can create a productive and supportive remote work environment.",
      "date": "2024-02-28",
      "type": "Business, Management"
    },
    {
      "id": 5,
      "image": "https://media.licdn.com/dms/image/C4D12AQEjco_1VFF7tw/article-cover_image-shrink_600_2000/0/1520132760767?e=2147483647&v=beta&t=6BblyKMleFhqK4As1sxKFv6LmMgTxq3Ph0UWZLWY1AY",
      "title": "Digital Marketing Trends for 2024",
      "sub_heading": "Staying Ahead in the Digital Space",
      "paragraph": "Digital marketing is constantly evolving, with new trends and technologies emerging every year. In this blog, we explore the latest digital marketing trends for 2024, including the rise of influencer marketing, AI-driven campaigns, and the growing importance of video content. We discuss how businesses can leverage these trends to reach their target audience more effectively and drive engagement. Additionally, we highlight the role of data analytics in optimizing marketing strategies and measuring campaign success. By staying ahead of the curve, companies can maintain a competitive edge in the digital space.",
      "date": "2024-01-20",
      "type": "Business, Marketing"
    },
    {
      "id": 6,
      "image": "https://media.licdn.com/dms/image/C5612AQEFOu1cfdWS9g/article-cover_image-shrink_720_1280/0/1566108971164?e=2147483647&v=beta&t=BasmmgW2cAF7rmBws36lnDFQ3pyg7LnJPObJrSNRCVY",
      "title": "Leadership in Times of Crisis",
      "sub_heading": "Guiding Your Business Through Uncertain Times",
      "paragraph": "Effective leadership is crucial during times of crisis. This blog discusses the qualities and strategies that make a strong leader, offering insights into how to navigate your business through challenges and emerge stronger on the other side. We explore the importance of resilience, adaptability, and clear communication in crisis leadership. Additionally, we provide examples of leaders who have successfully guided their organizations through turbulent times, highlighting their approaches and the lessons learned. By cultivating these leadership qualities, businesses can better withstand crises and position themselves for long-term success.",
      "date": "2023-12-10",
      "type": "Business, Leadership"
    },
    {
      "id": 7,
      "image": "https://media.licdn.com/dms/image/C4E12AQGYeUC_semXWA/article-cover_image-shrink_720_1280/0/1589317932069?e=2147483647&v=beta&t=9gTq4SNQR9SmfJLnG6md5h23T7MX-ogZFT-85ox42RU",
      "title": "Innovations in Product Development",
      "sub_heading": "Bringing New Products to Market",
      "paragraph": "Innovation is at the heart of successful product development. This blog explores the latest techniques and technologies that companies are using to create innovative products and stay competitive in the market. We discuss the role of customer feedback, market research, and iterative design in developing new products. Additionally, we highlight the impact of emerging technologies such as 3D printing, IoT, and AI in product innovation. By fostering a culture of creativity and continuous improvement, companies can bring new and exciting products to market that meet customer needs and drive business growth.",
      "date": "2023-11-05",
      "type": "Business, Innovation"
    }
  ]
  
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  return (
    <div className= {theme==='light'?'bg-white text-black':''}>
      <div className=' bg-[#c73ef0] text-center flex flex-col h-60 w-full justify-center items-center'>
        <h1 className='font-bold text-3xl text-white'>Welcome To Our Blog Post
             </h1>
             <h1 className='text-[#FFCD03] font-bold text-3xl'> Thanks for your kind visiting us</h1>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-24 py-8'>
        <div>
          <h1 className='font-bold text-3xl font-gray-900 my-2'>The Future of AI in Business</h1>
          <div className='h- overflow-hidden'>
            <img className='h-full w-full' src="https://www.luxinternational.com/uploads/upload_en/image/article/406_pic1_n.jpeg?ver=1.1" alt="" />
             <div className='flex flex-row gap-3'>
              <p className='text-blue-600'>Automation</p> <p>||</p>
              <p>May 21, 2024</p>

             </div>
          </div>


        </div>
        <div className=' '>
          {
            data.map((d)=>(
          <div className='flex flex-row  justify-between my-10 gap-8'>
            <div className='h-50 w-[50vw] overflow-hidden'>
              <Link to={`/blog/${d.id}`}><img className='object-cover h-50 w-full cursor-pointer hover:scale-125 duration-500 ease-in-out' src={d.image} alt="" /></Link>
            </div>
            <div className=''>  
              <div className='flex flex-row gap-2 text-sm'>
              <p className='text-blue-600'>{d.type}</p>
              <p>||</p>
              <p>{d.title}</p>

              </div>
              <h1 className='text-black font-bold '>{d.title}</h1>
              <p>{truncateText(d.paragraph, 50)}</p>

            </div>

          </div>
        ))
      }
        </div>
        
        </div>
      </div>
 
  );
};

export default Blog;
