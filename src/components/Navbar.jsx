import { assets } from '../assets/assets';
import React, { useState,useEffect } from 'react';

const Navbar = () => {
  const [showMobilemenu, setShowMobileMenu] = useState(false);
     
   useEffect(()=> {
    if (showMobilemenu) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  },[showMobilemenu])


  return (
  
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex gap-7 text-white">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Home</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">About</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Project</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full cursor-pointer hover:bg-gray-400 transition">
          Sign Up
        </button>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon}className='md:hidden w-7 cursor-pointer' alt="" />
      </div>

      {/* {-----------mobile menu -----------} */}

      <div className={`md:hidden ${showMobilemenu ?  'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center mt-5 px-5 gap-2 text-lg font-medium '>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a href="#Project" className='px-4 py-2 rounded-full inline-block'>Project</a>
          <a href="#Testimonials" className='px-4 py2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
