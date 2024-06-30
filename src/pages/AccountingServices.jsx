import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AccountingServices = () => {
  return (
    <div className='pt-40 pb-20'>
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <Link to={"/services"} className='text-xl font-semibold text-light-300'><ArrowBackIcon fontSize='30' /> Services</Link>
            <div id="accounting-services" className='font-bold text-4xl text-[#4d4d4d] my-6 text-center'>Accounting Services</div>
                <div>
                <span className='font-bold text-xl text-[#4d4d4d]'>
                    Understanding Accounting vs. Bookkeeping: 
                </span>
                <span className='ml-2 text-light-300 text-lg'>
                Many people confuse accounting with bookkeeping, often using the terms interchangeably, but they are not the same. Bookkeeping involves the basic data entry of your transactions. Accounting, however, goes beyond this to include studying and analysing data, identifying weakness in processes and procedures, and providing expert advice to clients to address those flaws.
                </span>
            </div>
            

            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-20'>
            <div className='md:w-1/2'>

            <div className='mt-8'>
                <span className='font-bold text-xl text-[#4d4d4d]'>
                    Tailored Accounting Solutions:
                </span> 
                <span className='ml-2 text-light-300 text-lg'>
                    Every business entity has a unique structure, and our goal is to 
                    understand your specific setup to create an accounting solution 
                    tailored to your needs. We collaborate with your accounting and 
                    finance staff to understand your processes, offering advice to enhance 
                    those processes. Additionally, we provide regular accounting and 
                    financial information, empowering you to make informed business 
                    decisions. We can also provide outsourced finance and accounting 
                    solutions for small businesses, start-ups to minimize the operating 
                    costs.
                </span>
            </div>

            </div>
            <div className='md:self-center md:w-1/2'>
                    <img src='/images/accounting.png' alt='Quality Services' />
            </div>
            </div>
            <div className='mt-8'>
                <span className='font-bold text-xl text-[#4d4d4d]'>
                    Our Accounting Services:
                </span> 
                <span className='ml-2 text-light-300 text-lg'>
                    Each month or quarter will do the following things for you:
                </span>
            </div>

            <div className='mt-4 pl-8 text-light-300 text-lg
            '>
                <ul className='list-disc'>
                <li>General ledger Entries</li>
                <li>Reconcile your bank account and other key balance sheet accounts</li>
                <li>Generate an Income Statement </li>
                <li>Generate a Balance Sheet</li>
                <li>Cashflow Statement</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AccountingServices;