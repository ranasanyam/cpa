import React from 'react';
import { Link } from 'react-router-dom';


const Taxation = () => {

  return (
    <div className='pt-40 pb-20'>
        <div className='w-11/12 md:w-4/5 mx-auto'>
        <div className='flex'>
        <Link to={"/"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Home / </Link><Link to={"/services"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Services / </Link><div className='text-xl font-semibold text-primary-100'>Taxation</div>
        </div>
            <div id="taxation"  className='font-bold text-2xl md:text-4xl text-[#4d4d4d] my-6 text-center'>Taxation</div>
      <div>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
            Tax Planning
        </div>
      </div>
      <div className='text-light-300 text-lg'>
        Contrary to popular belief, effective tax planning begins at the start of the fiscal year. For our high-net-worth (HNW) clients, we offer tailored tax planning services designed to help reduce tax liability. We recognize that each client's financial and tax situation is unique, so we do not provide a "one size fits all" solution. Instead, we develop personalized tax-saving strategies based on your specific circumstances, ensuring you can take full advantage of applicable tax laws.
      </div>
      <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-20'>
      <div className='mt-8 md:w-1/2'>
      <div>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
            Tax Preparation
        </div>
      </div>
      <div className='text-light-300 text-lg'>
      Navigating the ever-changing IRS tax code can be daunting due to its increasing complexity each year. Our experienced team is here to simplify the tax preparation process for you. Whether you need assistance with personal or business taxes, we are committed to answering all your questions comprehensively. We cater to individuals, partnerships, LLCs, S-corps, trusts, estates, and non-profit organizations.
      </div>
      <div className='text-light-300 text-lg mt-2'>
      Our highly trained staff uses advanced tax software to prepare your federal and state tax returns accurately, ensuring you receive the maximum refund you qualify for. We offer e-filing services for both federal and state tax returns across all 50 states, and this service is provided to our clients at no additional cost.
      </div>
      </div>
      <div className='md:self-center md:w-1/2'>
                    <img src='/images/taxation.png' alt='Taxation' />
            </div>
      </div>
    </div>
</div>
  )
}

export default Taxation;