import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import HomeCarousel from '../components/Carousel/HomeCarousel';
import QualityCard from '../components/QualityCard';


const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className='min-h-screen bg-[#E5EEF6] py-20 font-catamaran'>
        <div className='w-4/5 mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='text-base text-light-300 md:text-xl font-bold font-serif'>Our Services</div>
              <div className='font-bold text-2xl md:text-[40px] pt-3 text-[#323232]'>What we bring to you</div>
            </div>
            <div className='underline text-light-300 text-sm md:text-base font-semibold font-serif'>
                <Link to="/services">All Services</Link>
            </div>
          </div>
          <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20'>
            <Service 
            aosType="flip-up"
            title="Accounting Services"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/accounting.png'
            />
            <Service 
            aosType="flip-up"
            title="Taxation"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/taxation.png'
            />
            <Service 
            aosType="flip-up"
            title="IRS Compliance"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/irs.png'
            />
            <Service 
            aosType="flip-down"
            title="Incorporation Services"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/incorporation.png' 
            />
            <Service 
            aosType="flip-down"
            title="Financial Advisory"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/financial.png'
            />
            <Service 
            aosType="flip-down"
            title="Individual Services"
            description="Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs..."
            imgUrl='/logos/individual.png'
            />

            
          </div>
        </div>
      </div>
      <div className='h-full py-10 md:py-20 bg-white font-catamaran'>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" className='md:flex w-4/5 mx-auto lg:max-h-[500px]'>
          <div className='md:w-1/2'>
            <img src="/images/bg-home1.jpg" className='h-full w-full' alt="Handshake" />
          </div>
          <div className='bg-primary-100 md:w-1/2 p-4 py-8 md:p-10 2xl:p-20 flex flex-col justify-center text-light-100'>
            <div className='text-sm md:text-lg font-semibold font-serif'>
              WHO WE ARE
            </div>
            <div className='font-bold text-xl md:text-2xl pt-2 lg:text-4xl'>
              Our Mission, <br></br>
              Values and Vision
            </div>
            <div className='text-sm md:text-base py-5'>
              To provide comprehensive, accurate, and innovative accounting and financial services that empower our clients to achieve their financial goals with confidence and integrity.
            </div>
            <div>
              To be the leading CPA firm recognized for our unwavering commitment to excellence, innovation, and the success
              of our clients, while fostering a positive impact on our community and the accounting profession.
            </div>
            <div className='text-sm md:text-base lg:text-xl font-bold pt-8'>
              <span>Anuj Mehra</span><br/>
              <span>Partner</span>
            </div>
          </div>
          </div>
      </div>
      <div className='bg-[#E5EEF6] py-20 md:py-30'>
        <div className='w-4/5 mx-auto '>
          <div className='font-bold text-2xl md:text-[40px] pt-3 text-[#323232] mb-16'>Get to know the amazing features you will get.</div>
            <div className='grid place-items-center lg:grid-rows-1  lg:grid-cols-3 gap-10'>
              <QualityCard 
                img={"/icons/quality.png"} 
                title={"Quality Services"} 
                description={"At Anuj Sadiya & Associates, we are committed to delivering exceptional quality Services that meet the highest standards of accuracy, integrity, and professionalism. Our firm's dedication to quality is the cornerstone of our operations and is reflected in every aspect of our work."}
                redirectTo={"/quality-services"}
              />
              <QualityCard 
              img={"/icons/ideas.png"} 
              title={"Valuable Ideas"} 
              description={"At Anuj Sadiya & Associates, we believe that valuable ideas are the foundation of financial success. Our mission is to provide innovative and insightful solutions that help our clients navigate the complexities of the financial world with confidence and clarity."} 
              redirectTo={"/valuable-ideas"}
              />
              <QualityCard 
              img={"/icons/budget.png"} 
              title={"Budget Friendly"} 
              description={"At Anuj Sadiya & Associates, we understand that managing finances effectively is  crucial especially when working within a budget. That's why we offer a range of budget-friendly services designed to provide high-quality financial solutions without breaking the bank."} 
              redirectTo={"/budget-friendly"}
              />
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home;