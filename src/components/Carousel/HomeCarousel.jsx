import React from 'react';
import { Link } from 'react-router-dom';


const HomeCarousel = () => {
  return (
    <div className="bg-home relative bg-cover bg-no-repeat pt-[120px] min-h-screen font-catamaran flex items-center justify-center">
        <div className="md:w-11/12 lg:w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center md:justify-between h-full p-4">
            <div className="w-full md:w-2/5 text-center md:text-left py-10">

                <div className="text-primary-100 my-4 md:my-6 font-bold text-3xl md:text-5xl">
                    Financial Consulting For Your Business
                </div>
                <div className="text-base md:text-xl text-gray-600 mb-4">
                    Augue cubilia habitasse nostra sed dui facilisi lacus varius, porttitor gravida ultrices tristique hendrerit quisque congue facilisis.
                </div>
                <Link to='/contact'>
                <button className="bg-primary-100 font-serif hover:bg-primary-200 transition-colors rounded-md px-10 text-white font-semibold text-lg py-3">
                    Get Started
                </button>
                </Link>
            </div>
            <div className='w-full xs:w-4/5 sm:w-2/3 flex justify-center md:justify-end md:w-1/2'>
                <div>
                    <img src='/images/man-slide.png' alt='Financial Consultant' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCarousel;