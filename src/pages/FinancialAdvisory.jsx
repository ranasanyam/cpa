import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FinancialAdvisory = () => {
  return (
    <div className='pt-40 pb-20'>
    <div className='w-11/12 md:w-4/5 mx-auto'>
    <div className='flex'>
    <Link to={-1} className='text-xl font-semibold text-light-300'><ArrowBackIcon fontSize='30' /> Back</Link>
        </div>
        <div id="financial-advisory"  className='font-bold text-2xl md:text-4xl text-[#4d4d4d] my-6 text-center'>Financial Advisory</div>
        <div className='text-light-300 text-lg mt-2'>
      We are all well aware that business conditions are not only dynamic but also growing complex each day. They not only affect your business but also your personal net worth.
      </div>

      <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-20'>
      <div className='mt-4 md:w-1/2'>
      <div className='text-light-300 text-lg mt-2'>Our expertise in the following areas will help you navigate the ever-changing business dynamics:</div>
        <ul className='text-light-300 text-lg pl-8  mt-2 list-disc'>
          <li>Strategic Business Planning</li>
          <li>Business Valuation</li>
          <li>Bank Financing</li>
          <li>Internal Controls</li>
  	      <li>Budgeting and Forecasting</li>
        </ul>
      </div> 
      <div className='md:self-center md:w-1/2'>
                    <img src='/images/financial.png' alt='Quality Services' />
            </div>
      </div>
</div>
</div>
  )
}

export default FinancialAdvisory