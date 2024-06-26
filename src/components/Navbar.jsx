import React, { useState } from 'react';
import "./Navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const services = [
    'Accounting Services',
    'Taxation',
    'IRS Compliance',
    'Incorporation Services',
    'Financial Advisory',
    'Individual Services'
]
const subServices = {
    'Accounting Services': [
        'General Ledger Entries',
        'Reconcile your bank account and other key balance sheet accounts',
        'Generate an Income Statement',
        'Generate a Balance Sheet',
        'Cashflow Statement' 
    ],
    'Taxation': ['Tax Planning', 'Tax Preparation'],
    'IRS Compliance': ['IRS Audit Representation', 'Non-Filed Tax Returns', 'IRS Payment Plan', 'IRS Liens', 'Back Taxes Owned', 'Innocent Spouse Relief', 'Get Your IRS File', 'Bankruptcy'],
    'Incorporation Services': [],
    'Financial Advisory': ['Strategic Business Planning', 'Business Valuation', 'Bank Financing', 'Internal Controls', 'Budgeting and Forecasting'],
    'Individual Services': ['Personal Financial Planning', 'Estate Planning', 'Elder Care']
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openService, setOpenService] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
        setOpenService(null);
      };
    
      const handleServiceMouseEnter = (service) => {
        setOpenService(service);
      };

  return (

    <nav className="bg-primary-100 text-light-100 shadow-lg fixed w-full z-50 top-0">
    <div className="container px-4 lg:w-4/5 mx-auto flex justify-between items-center h-24">
      <a href="/">
      <div className="flex items-center">
        <img src="/logos/logo.png" alt="Logo" className="w-[120px]" />
        <span className=" ml-2 text-xl font-bold">AMSM</span>
      </div>
      </a>
      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200">Home</a>
       
        {/* <a href="/services" className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200">Services</a>
         */}
         <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a 
            href="/services" 
            className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200 flex items-center">
              Services <ExpandMoreIcon />
            </a>
            <div
              className={`absolute left-0 w-48 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => handleServiceMouseEnter(service)}
                  onMouseLeave={() => setOpenService(null)}
                >
                  <a
                    href={`/services#${service.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-light-100 relative"
                  >
                    {service}
                  </a>
                  <div
                    className={`absolute left-full top-0 mt-2 pl-2 w-44 lg:w-60 shadow-lg rounded-md transition-all duration-300 ease-in-out transform ${
                      openService === service ? 'block' : 'hidden'
                    }`}
                  >
                    {subServices[service].map((subService, subIdx) => (
                      <a
                        key={subIdx}
                        href={`#${subService.toLowerCase().replace(' ', '')}`}
                        className="block bg-white  px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-light-100"
                      >
                        {subService}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/blogs" className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200">Blog</a>
          <a href="/about" className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200">About Us</a>
        <a href="/contact" className="text-lg 2xl:text-[20px] text-light-100 hover:text-light-200">Contact</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-light-100">
          <MenuIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
    {isOpen && (
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
        onClick={toggleMenu}
      />
    )}
    <div
      className={`fixed top-0 left-0 w-40 sm:w-60 h-screen bg-white shadow-lg z-50 flex flex-col transition-transform duration-500 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-[-240px]'
      }`}
    >
     <button onClick={toggleMenu} className="text-primary-100 absolute top-4 right-4">
          <CloseIcon sx={{ fontSize: 30 }} />
        </button>
      <div className="pt-8 mb-4">
        <span className="text-xl font-bold text-primary-100">
        <img src="/logos/cpa_logo1.png" alt="Logo" className="w-[120px]" />
        </span>
       
      </div>
      <a href="/" className="block px-5 py-2 border-b border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Home</a>
      <a href="/services" className="block px-5 py-2 border-b border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Services</a>
      <a href="/blogs" className="block px-5 py-2 border-b border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Blog</a>
      <a href="/about" className="block px-5 py-2 border-b border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">About Us</a>
      <a href="/contact" className="block px-5 py-2 border-b border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Contact</a>
    </div>
  </nav>
  )
}

export default Navbar;