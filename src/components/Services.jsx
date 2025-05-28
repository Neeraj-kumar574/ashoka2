import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Service from './Service'
import { IoChevronForward } from 'react-icons/io5';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Services = () => {
     useGSAP(()=>{
    
    gsap.from(".top-service ",{
      y:-100,
      duration:0.7,
      opacity:0,
   
    })

     
 
 

  })

  return (
 <>
  <Navbar/>
    <section className="top-service bg-gray-50  px-4 ">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Left Blue Curve SVG */}
          <div className="absolute top-0 left-0 h-full">
            <svg
              viewBox="0 0 10 100"
              className="h-full w-6 text-blue-500"
              preserveAspectRatio="none"
            >
              <path
                d="M5,0 Q0,50 5,100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
  
      
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Our Services</h1>
  
       
          <div className="flex justify-center items-center text-lg text-gray-700 mt-2 space-x-1">
            <span className="hover:text-blue-600  text-lg font-semibold cursor-pointer">Home</span>
            <IoChevronForward size={18} />
            <span className="font-semibold">Our Services</span>
          </div>
        </div>
      </section>
  <Service/>
  <Footer/>
  
 </>
  )
}

export default Services