import React, { useEffect, useState, useRef } from 'react';
import "./Navbar.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const services = [
    'Accounting Services',
    'Taxation',
    'IRS Compliance',
    'Incorporation Services',
    'Financial Advisory',
    'Individual Services'
]
const Navbar = ({ isOpen, toggleMenu }) => {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollTop = useRef(0);



    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };
    



  useEffect(() => {
    const handleScroll = () => {
      
      const { scrollY } = window;
      if(scrollY > lastScrollTop.current) {
        setVisible(false);
      } else if(scrollY < lastScrollTop.current) {
        setVisible(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;

    };

    window.addEventListener('scroll', handleScroll, { passive: true } );

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`bg-primary-100 text-light-100 shadow-lg fixed z-20 left-0 right-0 top-0 h-30 duration-500 ${visible ? 'translate-y-0' : 'translate-y-[-120px]'}`}>
    <div className='bg-primary-100 border-b h-10'>
        <div className='w-11/12 lg:w-4/5 mx-auto h-full'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center h-full'>
        <div className='gap-5 hidden md:flex'>
                <LinkedInIcon  />
                <FacebookIcon  />
                <XIcon />
              </div>
          <div className='flex py-2 md:py-0 justify-between'>
            <div className='md:mr-10 flex'>
              <span className='mr-0 xxs:mr-2'>
                <EmailIcon />
              </span>
              amsm@email.com
            </div>
            <div>
              <span className='mr-0 xxs:mr-2'>
                <CallIcon />
              </span>
              +1 (248) 787-0502
            </div> 
          </div>
        </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto flex justify-between items-center h-20">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-light-100">
            <MenuIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
        <a href="/">
          <div className="text-xl xxs:text-2xl font-catamaran font-bold">
            Anuj Sadiya & Associates
          </div>
        </a>
        <div className="hidden md:flex space-x-6 font-catamaran">
          <a href="/" className="text-lg lg:text-[20px] text-light-100 hover:text-light-200">Home</a>
          <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseLeave}
            >
              <a 
              href="#services" 
              className="text-lg lg:text-[20px] text-light-100 hover:text-light-200 flex items-center transition-all">
                Services <span className='relative w-6 h-6 inline-block'>
                
                <ArrowDropDownIcon className={`absolute top-0 left-0 transition-all duration-5000 ${isDropdownOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
                <ArrowRightIcon className={`absolute top-0 left-0 transition-all duration-5000 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}  />
                </span>
              </a>
              <div
                className={`absolute left-0 w-48 bg-white shadow-lg rounded-sm transition-all duration-500 ease-in-out transform ${
                  isDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="relative group border"
                  >
                    <a
                      href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 transition-all duration-500 hover:text-light-100 relative"
                    >
                      {service}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <a href="/about" className="text-lg lg:text-[20px] text-light-100 hover:text-light-200">About Us</a>
          <a href="/contact" className="text-lg lg:text-[20px] text-light-100 hover:text-light-200">Contact</a>
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
        <a href="/" className="block px-5 py-2 border-b font-catamaran font-semibold border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Home</a>
        <a href="/services" className="block px-5 py-2 border-b font-catamaran font-semibold border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Services</a>
        <a href="/about" className="block px-5 py-2 border-b font-catamaran font-semibold border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">About Us</a>
        <a href="/contact" className="block px-5 py-2 border-b font-catamaran font-semibold border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-light-100">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;


