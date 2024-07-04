import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const BudgetFriendly = () => {
  return (
    <div className='bg-light-10'>
        <div className='w-11/12 lg:w-4/5 mx-auto pt-40 pb-16'>
        <Link to={-1} className='text-xl font-semibold text-light-300'><ArrowBackIcon fontSize='30' /> Back</Link>
        <div className='font-bold text-2xl lg:text-4xl my-6 text-center mt-4 text-[#4d4d4d]'>
                Budget Friendly
            </div>
            <div className='text-base mb-12 lg:text-lg text-light-300'>
                At <span className='font-semibold text-[#4d4d4d]'>Anuj Sadiya & Associates</span>, we understand that managing finances effectively is crucial, especially when working within a budget. That's why we offer a range of budget-friendly services designed to provide high-quality financial solutions without breaking the bank. Our commitment to affordability and excellence ensures you receive the best value for your investment.
            </div>
            <div className='md:hidden'>
                <img src='/images/budget.png' alt='Quality Services' />
            </div>
            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Affordable Tax Preparation
                </div> 
                We provide comprehensive tax preparation services at competitive rates. Our skilled CPAs are adept at maximizing your deductions and credits, ensuring you get the best possible return while keeping our fees budget-friendly. You can trust us to handle your taxes efficiently and accurately.
            </div>
        <div className='flex justify-between'>
        <div className='md:w-1/2'>
           
            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Cost-Effective Accounting Solutions
                </div> 
                Our accounting services are tailored to meet your needs without straining your budget. From bookkeeping and payroll to financial statement preparation, we offer reliable and affordable solutions that help you maintain clear and accurate financial records.
            </div>
            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Financial Planning on a Budget
                </div> 
                We believe that financial planning should be accessible to everyone. Our budget-friendly financial planning services are designed to help you set and achieve your financial goals, whether you’re saving for retirement, planning a major purchase, or simply looking to improve your financial health.
            </div>
            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Small Business Support
                </div> 
                Running a small business comes with unique financial challenges. Our services are specifically designed to support small businesses with cost-effective solutions. We offer essential services such as business formation, tax planning, and financial consulting at rates that are manageable for small business owners.
            </div>
            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Flexible Payment Options
                </div> We offer flexible payment options to make our services more accessible. Whether you prefer a flat fee, hourly rate, or a customized payment plan, we work with you to find a payment structure that fits your budget.
            </div>

            <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Free Initial Consultation
                </div> We offer a free initial consultation to discuss your financial needs and how we can assist you. This no-obligation meeting allows you to understand our services and how they can benefit you without any upfront cost.
            </div>
            
            
            </div>
                <div className='hidden md:block self-center w-1/2'>
                    <img src='/images/budget.png' alt='Quality Services' />
                </div>
             </div>
             <div className='mb-4 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Transparent Pricing
                </div> Transparency is key to our approach. We provide clear and upfront pricing for all our services, so you know exactly what to expect. There are no hidden fees or surprise charges—just straightforward, budget-friendly financial solutions.
            </div>
            <div className='mb-12 text-base lg:text-lg text-light-300'>
                <div className='font-semibold text-[#4d4d4d]'>
                Educational Resources
                </div> To further support our clients, we provide a wealth of educational resources at no additional cost. Our workshops, webinars, and online resources are designed to help you stay informed and make better financial decisions.
            </div>
            <div className='text-base lg:text-lg text-light-300'>
                At <span className='font-semibold text-[#4d4d4d]'>Anuj Sadiya & Associates</span>, we are dedicated to providing high-quality, budget-friendly services that meet your financial needs. Contact us today to learn more about how we can help you achieve your financial goals without compromising on quality.
            </div>
        </div>
    </div>
  )
}

export default BudgetFriendly;