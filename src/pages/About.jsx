import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=' bg-[#E5EEF6] py-20 overflow-hidden min-h-screen font-catamaran md:tracking-wide'>
      <div className='w-4/5 mx-auto '>
        <div className='py-20'>
          <div className='font-bold text-4xl mb-8 text-center md:text-left text-primary-100'>
            About Us
          </div>
          <div className='flex flex-col md:flex-row gap-10 2xl:gap-20'>
            <div className='bg-light-100 p-8 rounded-md md:rounded-lg md:w-1/2'>
              <div className='flex justify-center mb-6'>
                <img src="/logos/accounting.png" className='h-40 w-40' alt="Partner" />
              </div>
              <div>
                <span className='font-semibold'>Anuj Mehra</span> is a highly accomplished financial professional, holding prestigious credentials as a CPA (Certified Public Accountant) licensed in the States of Michigan and Colorado, as well as a Chartered Professional Accountant (CPA) in Canada and a Chartered Accountant (CA) in India. 
                He also possesses an MBA, further enhancing his extensive expertise in the field of accounting, finance, and taxation. 
              </div>
              <div className='mt-2'>With over 22 years of experience, Anuj has developed a robust understanding of financial practices in the U.S. and globally.
              Throughout his illustrious career, Anuj has worked with some of the most renowned firms in the industry, including PwC, EY, and Deloitte. His tenure with these Big 4 firms has provided him with a wealth of experience across a diverse range of accounting and taxation practices. 
              </div>
              <div className='mt-2'>This experience, combined with his deep knowledge of regulatory standards and financial frameworks, allows Anuj to deliver exceptional value to his clients in the USA.
              Anuj is proficient in U.S. Generally Accepted Accounting Principles (GAAP), Sarbanes-Oxley Act (SOX) Section 404 compliance, and International Financial Reporting Standards (IFRS). 
              </div>
              <div className='mt-2'>His expertise spans various sectors, including consumer products, industrial operations, and service-based businesses, enabling him to offer tailored financial solutions that meet the unique needs of each industry.
              </div>
              <div className='mt-2'>
              Anuj's comprehensive understanding of these complex regulatory and reporting requirements, coupled with his global perspective, makes him a valuable asset to any organization seeking to navigate the intricacies of accounting and taxation in today's interconnected world.
            </div>
            <div className='text-sm md:text-base lg:text-xl font-bold pt-8 text-right'>
              <span>Anuj Mehra</span><br/>
              <span>Partner</span>
            </div>
          </div>
          <div className='bg-light-100 p-8 rounded-md md:rounded-lg md:w-1/2 h-full'>
            <div className='flex justify-center mb-6'>
              <img src="/logos/accounting.png" className='h-40 w-40' alt="Partner" />
            </div>
          <div>
            <span className='font-semibold'>Sadiya Munir</span> is a distinguished Certified Public Accountant (CPA) licensed in Michigan and Colorado. She also holds a Master of Science in Accounting from the University of Michigan and MBA from ______________, further solidifying her extensive expertise in the field. 
            </div>
            <div className='mt-4'>
              With over seven years of comprehensive experience in taxation, audit, and risk assessment, Sadiya has worked with prominent organizations such as GM Financial and Mid-Michigan Home Health & Hospice. Her career has endowed her with a deep understanding of financial practices in the United States specially in the domains of Taxation, Audit & Risk Assessment.
            </div>
            <div className='text-sm md:text-base lg:text-xl font-bold pt-8 text-right'>
              <span>Sadiya Munir</span><br/>
              <span>Partner</span>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-6 mb-10 bg-light-100 px-10'>
        <div className='text-center font-bold text-2xl py-2 rounded-md md:rounded-lg lg:text-4xl'>
          Our Mission, Values and Vision
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row md:gap-20'>
          <div>
            <div className='font-semibold text-2xl'>Our Mission</div>
            <div className='my-2'>To provide comprehensive, accurate, and innovative accounting and financial services that empower our clients to achieve their financial goals with confidence and integrity.</div>
          </div>
          <div className='rounded-lg overflow-hidden mt-4 md:mt-0'>
            <img src="/images/mission.png" width={"600px"} alt='Mission' />
          </div>
        </div>
        <hr className='h-[2px] bg-light-200'></hr>
        <div className='my-10 flex flex-col-reverse justify-center md:flex-row md:gap-20 items-center'>
          <div className='rounded-lg overflow-hidden mt-4 md:mt-0'>
            <img src="/images/values.png" alt="Values" width={"600px"} />
          </div>
          <div>
            <div className='font-semibold text-2xl'>Values</div>
              <div className='my-2'><span className='font-semibold'>Integrity: </span> Uphold the highest standards of professional ethics and honesty in all our interactions and services.</div>
              <div className='my-2'><span className='font-semibold'>Client-Centric: </span> Focus on understanding and meeting the unique needs of each client, providing personalized and proactive solutions.</div>
              <div className='my-2'><span className='font-semibold'>Excellence: </span> Strive for excellence in everything we do, ensuring high-quality, accurate, and reliable services.</div>
              <div className='my-2'><span className='font-semibold'>Collaboration: </span> Foster a collaborative environment that values teamwork, respect, and open communication.</div>
              <div className='my-2'><span className='font-semibold'>Innovation: </span> Embrace change and continually seek innovative solutions to enhance our services and processes.</div>
              <div className='my-2'><span className='font-semibold'>Community Engagement: </span> Actively participate in and contribute to the communities we serve, promoting financial literacy and social responsibility.</div>
            </div>
          </div>
          <hr className='h-[2px] bg-light-200'></hr>
          <div  className='my-10 flex flex-col justify-center md:flex-row md:gap-20'>
            <div>
              <div className='font-semibold text-2xl'>Our Vision</div>
              <div className='my-2'>To be the leading CPA firm recognized for our unwavering commitment to excellence, innovation, and the success of our clients, while fostering a positive impact on our community and the accounting profession.`</div>
            </div>
            <div className='rounded-lg overflow-hidden mt-4 md:mt-0'><img src="/images/vision.png" width={"600px"} alt='Mission' /></div>
          </div>
        </div>
        <hr className='h-[2px] bg-light-200'></hr>
        <div className='my-10'>
          
          <div className='font-semibold text-3xl mt-4'>How We Can Help</div>
          <div className='my-2'>
            Our business consultant and CPA enjoy seeing you find lasting financial success. Whether you're looking to get your first business off the ground or are struggling to file a complicated tax return, we're here to help. We take the time to get to know you as we evaluate your situation and constantly keep your financial well-being in mind. Our many decades of accounting, tax and business consulting experience make us uniquely equipped to address your needs promptly.
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row mx-auto w-full pt-4 mb-12 justify-between md:justify-center'>
          <Link to="/contact">
            <div className='flex text-light-100 bg-primary-100 hover:bg-primary-200 cursor-pointer my-4 items-center py-3 px-4 rounded-md w-64 justify-center mr-6'>
              <CallIcon /> 
              <div className='ml-1 font-semibold'>Call Us: +1 (248) 787-0502</div>
            </div>
          </Link>
          <Link to="/contact">
          <div className='flex text-light-100 bg-primary-100 hover:bg-primary-200 cursor-pointer items-center py-3 px-4 rounded-md w-64 justify-center mr-6'>
            <CalendarMonthIcon />
            <div className='ml-1 font-semibold'>Book a Consultation</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About;