import React from 'react';

const Footer = () => {
  return (
    <div id='contact' className='bg-primary-100 relative font-catamaran'>
        <div className='w-4/5 mx-auto py-10  flex flex-col items-baseline md:flex-row md:justify-between md:items-center'>
          <div data-aos-anchor-placement="bottom-bottom" className='md:w-1/2'>
            <div className='my-4'>
            <img src="/logos/logo.png" alt="Logo" className="w-[250px]" />
            </div>


          </div>
          <div className='xs:flex xs:justify-end w-full md:w-1/2'>
          {/* <div className='text-light-100 md:w-2/3'>
            <div className='underline my-6 font-semibold text-lg font-serif'>Services</div>
            <ul className='list-disc pl-4 md:pl-0'>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Accounting Services</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Taxation</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>IRS Compliance</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Incorporation Services</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Financial Advisory</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Individual Services</li>
            </ul>
          </div> */}
          <div className='text-light-100 md:w-1/2'>
            <div className='underline my-6 font-semibold text-lg font-serif'>Subscribe</div>
            <div>
              <input type='text' placeholder='Name' className='w-full p-2 rounded-sm' />
            </div>
            <div className='my-6'>
              <input type='email' className='p-2 w-full' placeholder='Email Address' />
            </div>
            <div className='flex justify-end'>
                <button className='bg-[#F26522] text-white w-1/2 font-serif py-2 mt-2 text-lg font-semibold rounded-md'>Submit</button>
              </div>
          </div>
          </div>
        </div>
        <div className='border-t text-light-100 text-center py-4 text-lg'>Copyright &copy; Anuj Sadiya & Associates. . All Rights Reserved.</div>
      </div>
  )
}

export default Footer;