import React from 'react';
import { Link } from 'react-router-dom';


const HomeCarousel = () => {
  return (
    <div className="bg-home relative bg-cover bg-no-repeat pt-[120px] min-h-screen font-catamaran flex items-center justify-center">
        <div className="w-11/12 lg:w-4/5 mx-auto text-center h-full p-4">
            <div className=" py-10">

                <div className="text-primary-100 my-4 md:my-6 font-bold text-3xl lg:text-4xl xl:text-5xl">
                    Financial Consulting For Your Business
                </div>
                <div className="text-base md:text-xl text-gray-600 my-4">
                Accounting, Taxation, Compliance & Advisory for Businesses & Inviduals
                </div>
                <Link to='/contact'>
                <button className="bg-primary-100 font-serif hover:bg-primary-200 transition-colors rounded-md px-10 text-white font-semibold text-lg py-3 mt-4">
                    Get Started
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeCarousel;