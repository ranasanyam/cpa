import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Contact = () => {
  return (
    <div className='bg-[#e6f1ff] py-20 overflow-hidden min-h-screen'>
      <div className='w-4/5 mx-auto font-catamaran'>
        <div className='py-20'>
          <div className='font-bold text-4xl mb-8 text-center md:text-left text-primary-100'>
            Contact Us
          </div>
          <div className='mt-10 bg-white py-10 px-10 lg:px-20'>
            <div className='font-bold text-light-300 text-xl mb-2'>
              OFFICE
            </div>
            <div className='font-bold text-xl md:text-2xl lg:text-3xl'>
              1871 Golf Ridge Drive S, Bloomfield Twp, MI 48302
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-10 lg:mb-20'>
              <div className='flex flex-col md:flex-row text-2xl font-bold mt-6'>
                <div className='md:mr-10 mb-5 md:mb-0'>
                  <span className='mr-2 text-[#F26522]'>
                    <EmailIcon />
                  </span>
                  amsm@email.com
                </div>
                <div>
                  <span className='mr-2 text-[#F26522]'>
                    <CallIcon />
                  </span>
                  +1 (248) 787-0502
                </div> 
              </div>
              <div className='lg:ml-16 mt-10 md:mt-0'>
                <LinkedInIcon className='text-light-300 mr-2' fontSize='large' />
                <FacebookIcon className='text-light-300 mr-2' fontSize='large' />
                <XIcon className='text-light-300' fontSize='large'/>
              </div>
            </div>
            <hr></hr>
            <div className='mt-10'>
              <div className='font-bold text-light-300 text-xl mb-6'>
                CONTACT FORM
              </div>
              <div className='font-bold text-xl md:text-2xl lg:text-3xl'>
                How can we help
              </div>
              <div>
                <form className='w-full my-10'>
                  <div className='md:flex'>
                    <input type='text' className='my-3 mr-4 border w-full md:text-lg px-4 py-3 rounded-md' placeholder='First Name' />
                    <input type='text' className='my-3 border w-full md:text-lg px-4 py-3 rounded-md' placeholder='Last Name' />
                  </div>
                  <div className='md:flex'>
                    <input type='number' className='my-3 mr-4 border w-full md:text-lg px-4 py-3 rounded-md' placeholder='Phone Number' />
                    <input type='email' className='my-3 border md:text-lg w-full px-4 py-3 rounded-md' placeholder='Email Address' />
                  </div>
                  <div>
                    <textarea t className='my-3 border w-full md:text-lg px-4 py-3 rounded-md' placeholder='Message...' rows="5" />
                  </div>
                  <div className='flex justify-end'>
                    <button className='bg-[#F26522] text-white w-1/2 md:w-1/3 py-3 mt-2 text-xl font-semibold rounded-md'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;