import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const IncorporationServices = () => {
  return (
    <div className='pt-40 pb-20'>
        <div className='w-11/12 md:w-4/5 mx-auto'>
        <div className='flex'>
        <Link to={-1} className='text-xl font-semibold text-light-300'><ArrowBackIcon fontSize='30' /> Back</Link>
        </div>
            <div id="incorporation-services"  className='font-bold text-2xl md:text-4xl text-[#4d4d4d] my-6 text-center'>Incorporation Services</div>


      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-20'>
      <div className='text-light-300 text-lg mt-2 md:w-1/2'>
        Incorporating a business not only mitigates personal liability but also offers numerous tax advantages that individuals do not have access to. Each type of entity comes with its own set of benefits and drawbacks. While operational flexibility and tax obligations typically drive decision-making, several other factors must be considered when selecting the appropriate entity type. While some entities afford greater operational flexibility, they may also entail certain tax drawbacks. Achieving a balance and understanding the implications of various factors is crucial in making informed decisions.
      </div>
      <div className='md:self-center md:w-1/2'>
                    <img src='/images/incorporation.png' alt='Quality Services' />
            </div>
      </div>
      <div className='mt-4'>
        <div>
          <div className='font-bold text-xl text-[#4d4d4d]'>
          We provide expert advice in help you create the following type of entities:
          </div>
        </div>
      </div>
      <div className='mt-4 pl-8'>
        <ul className='text-light-300 text-lg mt-2 list-disc'>
          <li>C Corp</li>
          <li>S Corp</li>
          <li>LLC</li>
          <li>Partnership</li>
  	      <li>Not-for-profit</li>
        </ul>
      </div>
    </div>
</div>
  )
}

export default IncorporationServices