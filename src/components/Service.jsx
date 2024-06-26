import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ imgUrl, title, description, aosType }) => {
  return (
    <div data-aos={aosType} className='bg-white w-full h-full px-6 py-10 hover:shadow-xl duration-500 rounded-sm'>
        <div>
            <img src={imgUrl} alt={title} />
        </div>
        <div className='font-bold text-2xl my-4'>
            {title}
        </div>
        <div className='text-light-300 text-sm md:text-base'>
            {description}
        </div>
        <div className='underline font-bold text-base text-[#F26522] md:text-lg cursor-pointer mt-4 md:mt-6 lg:mt-8 font-serif w-fit'>
            <Link to="/services">Learn more</Link>
        </div>
    </div>
  )
}

export default Service;