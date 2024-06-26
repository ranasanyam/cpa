import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <div id='contact' className='bg-primary-100 relative top-[96px] font-roboto'>
        <div className='w-4/5 mx-auto py-10 lg:py-20 flex flex-col items-baseline md:flex-row md:justify-between md:items-center'>
          <div data-aos-anchor-placement="bottom-bottom" className='md:w-1/3'>
            <div className='my-4'>
            <img src="/logos/logo.png" alt="Logo" className="w-[250px]" />
            </div>

            <div className='lg:ml-16'>
            <LinkedInIcon className='text-light-100 mr-2' fontSize='large' />
            <FacebookIcon className='text-light-100 mr-2' fontSize='large' />
            <XIcon className='text-light-100' fontSize='large'/>
            </div>
          </div>
          <div className='xs:flex xs:justify-between w-full md:w-1/2'>
          <div className='text-light-100 md:w-2/3'>
            <div className='underline my-6 font-semibold text-lg font-serif'>Services</div>
            <ul className='list-disc pl-4 md:pl-0'>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Accounting Services</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Taxation</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>IRS Compliance</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Incorporation Services</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Financial Advisory</li>
              <li className='py-1 cursor-pointer hover:underline duration-300 ease-in text-base lg:text-lg'>Individual Services</li>
            </ul>
          </div>
          <div className='text-light-100 md:w-2/3'>
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
      </div>
  )
}

export default Footer;