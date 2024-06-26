import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Service from '../components/Service';


const Home = () => {
  return (
    <div>
              <div className="bg-home relative bg-cover bg-no-repeat min-h-screen top-[96px] font-roboto  flex items-center justify-center">
        <div className="md:w-11/12 lg:w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center md:justify-between h-full p-4">
          <div className="w-full md:w-2/5 text-center md:text-left py-10">
            <div className="font-bold text-xl md:text-2xl text-gray-800 font-serif">
              We&apos;re Site Name
            </div>
            <div className="text-primary-100 my-4 md:my-6 font-bold text-3xl md:text-5xl">
              Financial Consulting For Your Business
            </div>
            <div className="text-base md:text-xl text-gray-600 mb-4">
              Augue cubilia habitasse nostra sed dui facilisi lacus varius, porttitor gravida ultrices tristique hendrerit quisque congue facilisis.
            </div>
            <div>
              <button className="bg-primary-100 font-serif hover:bg-primary-200 transition-colors rounded-md px-10 text-white font-semibold text-lg py-3">
                Get Started
              </button>
            </div>
          </div>
          <div className='w-full xs:w-4/5 sm:w-2/3 flex justify-center md:justify-end md:w-1/2 md:pt-[5rem]'>
                <div>
                  <img src='/images/man-slide.png' alt='Financial Consultant' />
                </div>
              </div>
        </div>
      </div>
      <div className='w-full relative top-[120px] lg:top-0'>
        <div className='w-4/5 mx-auto grid place-items-center lg:grid-rows-1  lg:grid-cols-3 gap-10'>
          <div data-aos="zoom-in" className='border p-8 rounded-xl bg-white hover:border-[#F26522] hover:shadow-xl duration-300 z-10 w-full cursor-pointer'>
           <div className='flex justify-between'>
            <img src="/icons/quality.png" alt="Quality Services" className='h-[40px] w-[40px]' />
            <div className='border p-1 rounded-full border-[#F26522] transition rotate-[-45deg] duration-300 hover:rotate-0 text-[#F26522] hover:bg-[#F26522] hover:text-light-100'>
            <ArrowForwardIcon sx={{ fontSize: 30 }} />
            </div>
           </div>
            <div className='my-2 font-bold text-[20px]'>Quality Services</div>
            <div>
              At Anuj Sadiya & Associates, we are committed to delivering
              exceptional quality Services that meet the highest standards of accuracy, integrity,
              and professionalism. Our firm's dedication to quality is the cornerstone of our operations
              and is reflected in every aspect of our work.
            </div>
            
          </div>
          <div data-aos="zoom-in" className='border p-6 rounded-xl bg-white z-10 w-full hover:border-[#F26522] hover:shadow-xl duration-300 cursor-pointer order-[-1]'>
          <div className='flex justify-between'>
            <img src="/icons/ideas.png" alt="Valuable Ideas" className='h-[40px] w-[40px]' />
            <div className='border p-1 rounded-full border-[#F26522] transition rotate-[-45deg] duration-300 hover:rotate-0 text-[#F26522] hover:bg-[#F26522] hover:text-light-100'>
            <ArrowForwardIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
            <div className='my-2 font-bold text-[20px] primary'>Valuable Ideas</div>
            <div>
              At Anuj Sadiya & Associates, we believe that valuable ideas are the foundation
              of financial success. Our mission is to provide innovative and insightful solutions that help
              our clients navigate the complexities of the financial world with confidence and clarity.
            </div>
            
          </div>
          <div data-aos="zoom-in" className='border p-6 rounded-xl bg-white z-10 w-full hover:border-[#F26522] hover:shadow-xl duration-300 cursor-pointer'>
          <div className='flex justify-between'>
            <img src="/icons/budget.png" alt="Budget Friendly" className='w-[40px] h-[40px]' />
            <div className='border p-1 rounded-full border-[#F26522] transition rotate-[-45deg] duration-300 hover:rotate-0 text-[#F26522] hover:bg-[#F26522] hover:text-light-100'>
            <ArrowForwardIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
            <div className='my-2 font-bold text-[20px]'>Budget Friendly</div>
            <div>
              At Anuj Sadiya & Associates, we understand that managing finances effectively is 
              crucial especially when working within a budget. That's why we offer a range of budget-friendly
              services designed to provide high-quality financial solutions without breaking the bank.
            </div>
          </div>
        </div>
      </div>
      <div className='h-full pb-10 md:pb-20 lg:pb-40 relative top-[120px] pt-12 md:pt-0 lg:top-[96px] bg-white font-roboto'>
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
            <div className='text-sm md:text-base pt-5'>
              To provide comprehensive, accurate, and innovative accounting and financial services that empower our clients to achieve their financial goals with confidence and integrity.
            </div>
            <div>
              To be the leading CPA firm recognized for our unwavering commitment to excellence, innovation, and the success
              of our clients, while fostering a positive impact on our community and the accounting profession.
            </div>
            <div className='text-sm md:text-base lg:text-xl font-bold pt-8'>
              <span>Anuj Mehra</span><br/>
              <span>Founder & CEO</span>
            </div>
          </div>
          </div>
      </div>
      <div className='min-h-screen bg-[#E5EEF6] relative top-[120px] py-20 font-roboto'>
        <div className='w-4/5 mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='text-base text-light-300 md:text-xl font-bold font-serif'>Our Services</div>
              <div className='font-bold text-2xl md:text-[40px] pt-3'>What we bring to you</div>
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
      <div className='bg-primary-100 relative top-[120px] font-roboto'>
        <div data-aos="fade-right" className='w-4/5 mx-auto md:flex md:justify-between py-10 md:py-20'>
          <div className='md:w-1/2 flex flex-col justify-center'>
            <div className='text-light-100 my-4 font-bold text-3xl lg:text-[40px] leading-10'>Request a Free Call Back</div>
            <div className='text-light-100 text-sm md:text-lg'>Provide discussion information and we&apos;ll get back to you as soon as possible</div>
          </div>
          <div className='md:w-1/2 md:flex md:flex-col md:items-end md:justify-center py-10 md:py-0'>
            <form className='w-full lg:w-2/3 md:pl-4 lg:pl-0'>
              <div>
                <input type='text' className='my-3 w-full md:text-lg px-4 py-3 rounded-md' placeholder='Name' />
              </div>
              <div>
                <input type='text' className='my-3 md:text-lg w-full px-4 py-3 rounded-md' placeholder='Email Address' />
              </div>
              <div>
                <input type='number' className='my-3 w-full md:text-lg px-4 py-3 rounded-md' placeholder='Phone Number' />
              </div>
              <div className='flex justify-end'>
                <button className='bg-[#F26522] text-white w-1/3 py-3 mt-2 text-xl font-semibold rounded-md'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='min-h-screen relative top-[120px] bg-[#E5EEF6] py-20 font-roboto'>
      <div className='w-4/5 mx-auto'>

            <div className='flex items-center justify-between'>
            <div>
              <div className='text-base text-light-300 md:text-xl font-bold font-serif'>Our Blogs</div>
              <div className='font-bold text-2xl md:text-[40px] pt-3'>Our Latest News</div>
            </div>
            <div className='underline text-light-300 text-sm md:text-base font-semibold font-serif'>
                <Link to="/blogs">All Blogs</Link>
            </div>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
          <div className='bg-white h-full max-w-[500px]'>
              <div>
                <img src="/images/blog1.jpg" alt="blog" />
              </div>
              
              <div className='px-6 py-4'>
              <div className='font-bold text-2xl mb-4'>
                Investment Update, Fourth Quarter 2023
              </div>
              <div className='text-light-300 text-sm md:text-base'>Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs...</div>
              <div className='underline font-bold text-base text-[#F26522] md:text-lg cursor-pointer mt-4 font-serif w-fit'>Read more</div>
              </div>
            </div>
            <div className='bg-white h-full max-w-[500px]'>
              <div>
                <img src="/images/blog2.jpg" alt="blog" />
              </div>
              
              <div className='px-6 py-4'>
              <div className='font-bold text-2xl mb-4'>
                Plans for growing businesses
              </div>
              <div className='text-light-300 text-sm md:text-base'>Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs...</div>
              <div className='underline font-bold text-base text-[#F26522] md:text-lg cursor-pointer mt-4 md:mt-6 lg:mt-8 font-serif w-fit'>Read more</div>
              </div>
            </div>
            <div className='bg-white h-full max-w-[500px]'>
              <div>
                <img src="/images/blog4.jpg" alt="blog" />
              </div>
              
              <div className='px-6 py-4'>
              <div className='font-bold text-2xl mb-4'>
                Solution financial for good startup
              </div>
              <div className='text-light-300 text-sm md:text-base'>Every business entity has a unique structure, and our goal is to understand your specific setup to create an accounting solution tailored to your needs...</div>
              <div className='underline font-bold text-base text-[#F26522] md:text-lg cursor-pointer mt-4 font-serif w-fit'>Read more</div>
              </div>
            </div>
            
            
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home;