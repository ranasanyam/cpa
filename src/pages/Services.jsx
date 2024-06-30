import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';




const Services = () => {
  return (
    <div className='relative pt-40 pb-20 min-h-screen overflow-hidden'>

      <div className='top-[30%] md:top-0 md:left-0 h-auto w-full absolute opacity-30'>
        <img src={"/images/finance.png"} className='w-full' alt="Finance" />
      </div>
      <div className='w-11/12 md:w-4/5 mx-auto relative'>
        <div className='font-bold text-4xl mb-8 text-center md:text-left text-[#4d4d4d]'>Services</div>
        <div className='flex flex-col md:flex-row md:justify-between gap-20'>
        <div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              Accounting Services
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/accounting-services"}><li className='w-fit hover:underline cursor-pointer'>General ledger Entries </li></Link>
              <Link to={"/services/accounting-services"}><li className='w-fit hover:underline cursor-pointer'>Reconcile your bank account and other key balance sheet accounts</li></Link>
              <Link to={"/services/accounting-services"}><li className='w-fit hover:underline cursor-pointer'>Generate an Income Statement </li></Link>
              <Link to={"/services/accounting-services"}><li className='w-fit hover:underline cursor-pointer'>Generate a Balance Sheet</li></Link>
              <Link to={"/services/accounting-services"}><li className='w-fit hover:underline cursor-pointer'>Cashflow Statement</li></Link>

            </div>
          </div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              Taxation
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/taxation"}><li className='w-fit hover:underline cursor-pointer'>Tax Planning </li></Link>
              <Link to={"/services/taxation"}><li className='w-fit hover:underline cursor-pointer'>Tax Preparation</li></Link>


            </div>
          </div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              IRS Compliance
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>IRS Audit Representation</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>Non-Filed Tax Returns</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>IRS Payment Plan</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>IRS Liens</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>Back Taxes Owed</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>Innocent Spouse Relief</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>Get Your IRS File</li></Link>
              <Link to={"/services/irs-compliance"}><li className='w-fit hover:underline cursor-pointer'>Bankruptcy</li></Link>
            </div>
          </div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              Incorporation Services
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/incorporation-services"}><li className='w-fit hover:underline cursor-pointer'>C Corp </li></Link>
              <Link to={"/services/incorporation-services"}><li className='w-fit hover:underline cursor-pointer'>S Corp</li></Link>
              <Link to={"/services/incorporation-services"}><li className='w-fit hover:underline cursor-pointer'>LLC</li></Link>
              <Link to={"/services/incorporation-services"}><li className='w-fit hover:underline cursor-pointer'>Partnership</li></Link>
              <Link to={"/services/incorporation-services"}><li className='w-fit hover:underline cursor-pointer'>Not-for-profit</li></Link>

            </div>
          </div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              Financial Advisory
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/financial-advisory"}><li className='w-fit hover:underline cursor-pointer'>Strategic Business Planning</li></Link>
              <Link to={"/services/financial-advisory"}><li className='w-fit hover:underline cursor-pointer'>Business Valuation</li></Link>
              <Link to={"/services/financial-advisory"}><li className='w-fit hover:underline cursor-pointer'>Bank Financing</li></Link>
              <Link to={"/services/financial-advisory"}><li className='w-fit hover:underline cursor-pointer'>Internal Controls</li></Link>
              <Link to={"/services/financial-advisory"}><li className='w-fit hover:underline cursor-pointer'>Budgeting and Forecasting</li></Link>

            </div>
          </div>
          <div className='my-6 w-fit'>
            <div className='font-semibold text-2xl mb-2 text-light-300'>
              Individual Services
            </div>
            <div className='text-[#4d4d4d] text-base md:text-lg'>
              <Link to={"/services/individual-services"}><li className='w-fit hover:underline cursor-pointer'>Personal Financial Planning </li></Link>
              <Link to={"/services/individual-services"}><li className='w-fit hover:underline cursor-pointer'>Estate Planning</li></Link>
              <Link to={"/services/individual-services"}><li className='w-fit hover:underline cursor-pointer'>Elder Care </li></Link>


            </div>
          </div>
        </div>
        <div className='md:w-1/2'>
        <form className='my-10'>
        <div className='font-semibold text-2xl text-[#4d4d4d]'>Contact Us</div>
                  <div className='md:flex'>
                    <input type='text' className='bg-transparent my-3 mr-4 border border-[#4d4d4d] w-full md:text-lg px-4 py-3 rounded-md' placeholder='Name' />
                    
                  </div>
                  <div className='md:flex md:gap-5'>
                  <input type='email' className='bg-transparent my-3 border border-[#4d4d4d] md:text-lg w-full px-4 py-3 rounded-md' placeholder='Email Address' />
                    <input type='number' className='bg-transparent my-3 mr-4 border border-[#4d4d4d] w-full md:text-lg px-4 py-3 rounded-md' placeholder='Phone Number' />
                    
                  </div>
                  <div>
                    <textarea t className='bg-transparent my-3 border border-[#4d4d4d] w-full md:text-lg px-4 py-3 rounded-md' placeholder='Comments...' rows="5" />
                  </div>
                  <div className='flex justify-end'>
                    <button className='bg-[#F26522] text-white w-1/2 md:w-1/3 py-3 mt-2 text-xl font-semibold rounded-md'>Submit</button>
                  </div>
                </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services;