import React from 'react';
import { Link } from 'react-router-dom';

const IndividualServices = () => {
  return (
    <div className='pt-40 pb-20'>
    <div className='w-11/12 md:w-4/5 mx-auto'>
    <div className='flex'>
        <Link to={"/"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Home / </Link><Link to={"/services"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Services / </Link><div className='text-xl font-semibold text-primary-100'>Individual Services</div>
        </div>
        <div id="individual-services"  className='font-bold text-2xl md:text-4xl text-[#4d4d4d] my-6 text-center'>Individual Services</div>
        <div className='text-light-300 text-lg mt-2'>
      As an employee or practicing professional, you are hard-pressed for time to personally manage your financials. Our experts offer a range of services
      </div>

      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-20'>
      <div className='mt-4 pl-8 md:w-1/2'>
        <ul className='text-light-300 text-lg mt-2 list-disc'>
          <li className='mt-4'><span className='font-bold'>Personal Financial Planning: </span> You receive personalized guidance and a detailed financial plan tailored to your specific needs. This comprehensive approach helps mitigate risk, enhance performance, and secure the growth and longevity of your wealth.</li>
          <li className='mt-4'><span className='font-bold'>Estate Planning:</span> Navigating the complexities and bureaucratic hurdles of estate planning can feel overwhelming, but you don't have to tackle it by yourself. Our dedicated team is here to guide you through each stage of the process, providing expert assistance and support along the way.</li>
          <li className='mt-4'><span className='font-bold'>Elder Care:</span> With our elder care services, you benefit from the support of a compassionate, trustworthy, and knowledgeable professional. You'll have someone on your team who is dedicated to safeguarding the best interests of your loved one.</li>
        </ul>
      </div>
      <div className='md:self-center md:w-1/2'>
                    <img src='/images/individual.png' alt='Quality Services' />
            </div>
      </div>
</div>
</div>
  )
}

export default IndividualServices;