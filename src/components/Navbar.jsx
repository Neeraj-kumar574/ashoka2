
import React, { useState, useRef } from 'react';
import Logo from '../images/logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaLocationArrow } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const topRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".top a", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

   
  }, { scope: topRef }); // scope defined here


  useGSAP(()=>{
     gsap.from(".logo ",{
      x:-100,
      duration:1.5,
      opacity:0,
    
    });
     gsap.from("ul li ",{
      y:-100,
      duration:1.5,
      opacity:0,
    
    });
     gsap.from(".btn1 ",{
      x:100,
      duration:1.5,
      opacity:0,
    
    });
  })
  return (
    <>
      {/* Top Info Bar */}
      <div ref={topRef} className="bg-orange-500 w-full px-4 md:px-36 py-3 text-white text-sm">
        <div className="top flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <a className='flex justify-center items-center' href="mailto:ashoktiwari784@gmail.com"><FaLocationArrow />
ashoktiwari784@gmail.com</a>
          <a className='flex justify-center items-center' href="#"><FaLocationDot/>#113 JAIN VILLA BHAMIAN ROAD, MUNDIAN KALAN, LUDHIANA, PUNJAB</a>
          <a className='flex justify-center items-center' href="#"> <IoCall/>+91 9357566978, +91 9317802767</a>
        </div>
      </div>

      {/* Main Nav Bar */}
{/* Main Nav Bar */}
<div className="sticky top-0 w-full z-50 bg-white px-4 md:px-36 py-4 flex justify-between items-center shadow-md">

        <img src={Logo} alt="Logo" className="logo w-40 md:w-56" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center text-lg font-medium">
          <li><a href="/" className="hover:text-orange-400 ">Home</a></li>
          <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
          <li><a href="/service" className="hover:text-orange-400">Service</a></li>
           <li><a href="/gallery" className="hover:text-orange-400">Gallery</a></li>
          <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
        </ul>

        <button className="btn1 hidden lg:block bg-orange-500 text-white hover:bg-red-950  transition px-7 py-3 rounded-full text-lg font-medium">
          Get A Quote <span>&#10148;</span>
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden z-20">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-slate-700 text-white flex flex-col items-center gap-4 py-6 lg:hidden shadow-md z-10">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="/service" onClick={() => setMenuOpen(false)}>Service</a>
            <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-sm font-medium mt-2">
              Get A Quote <span>&#10148;</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
