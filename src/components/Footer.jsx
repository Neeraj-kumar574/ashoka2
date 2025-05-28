
import React from 'react';
import Logo from '../images/logo.png';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
useGSAP(()=>{
    gsap.from(".left-section ",{
      x:-80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".left-section",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
    })
     gsap.from(".btn ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".btn",
        scroll:"body",
        scrub:2,
        markers:false,
       

      }
    })

})
  
  

  return (
    <>
      <div className="w-full px-6 md:px-36 bg-red-200">
        {/* CTA Section */}
        <div className=" flex flex-col md:flex-row justify-between items-center py-10 w-full gap-6 text-center md:text-left">
          <h2 className="left-section text-3xl md:text-5xl font-semibold md:w-3/5">
            "we deliver trust, safety, and efficiency, every mile of the way."
          </h2>
          <div>
            <button className="btn hover:bg-black bg-orange-500 text-white text-lg px-6 py-3 font-semibold rounded-full">
              Get Started <span>&#10148;</span>
            </button>
          </div>
        </div>

        <hr className="text-black w-full" />
        <br />
        <br />

        {/* Main Footer */}
        <div className="bg-white flex flex-col lg:flex-row justify-between p-8 gap-12">
          {/* Column 1 */}
          <div className="w-full">
            <img className="w-40 md:w-60 py-4" src={Logo} alt="Logo" />
            <p className="py-3 hover:text-orange-500">
              Have goods to move? Let us handle the logistics while you focus on what matters most. Whether it's fragile items, perishable goods, heavy machinery, or time-sensitive deliveries — we’re here to help.
            </p>
            <p className='py-2 font-semibold hover:text-orange-500'>Branch Address : H.NO. 113 Jain Villa Bhamian Road, Mundian Kalan, Ludhiana, Punjab-141015</p>
            <p className="py-3 font-semibold hover:text-orange-500">
              Reach us : Shop No. 26 - 27, Workshop Lane, TPT Nagar, Ludhiana-1401003
              <br />
              Call us : +91 9357566978, +91 9317802767
              <br />
              e-Mail us :
            </p>
            <a className="font-semibold text-blue-500" href="#">
              ashoktiwari784@gmail.com 
            </a>

            <div className="flex gap-4 py-4">
              <div className="bg-orange-200 hover:bg-orange-500 cursor-pointer p-2 rounded-full">
                <FaInstagram className="text-orange-500 hover:bg-orange-500 hover:text-white text-2xl" />
              </div>
              <div className="bg-orange-200 hover:bg-orange-500 cursor-pointer hover:text-white p-2 rounded-full">
                <FaFacebookF className="text-orange-500 hover:text-white text-2xl" />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full md:px-3">
            <h2 className="text-black text-2xl md:text-2xl font-semibold py-6 md:py-8">Quick Links</h2>
            <ul className="flex flex-col gap-4 md:gap-7">
              <li className='hover:text-orange-500'> <a href="/">Home</a></li>
              <li className='hover:text-orange-500'> <a href="/about">About Us</a></li>
              <li className='hover:text-orange-500'> <a href="/service">Service</a></li>
              <li className='hover:text-orange-500'> <a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full">
            <h2 className="text-black text-2xl md:text-2xl font-semibold py-6 md:py-8">Trasportation Services</h2>
            <ul className="flex flex-col gap-4 md:gap-7  ">
              <li className='hover:text-orange-500'><a href="">Packer and Movers Services</a></li>
              <li className='hover:text-orange-500'><a href="">Within City Trasportation</a></li>
              <li className='hover:text-orange-500'><a href="">Outside City Trasportations</a></li>
              <li className='hover:text-orange-500'><a href="">National Trasportation</a></li>
              <li className='hover:text-orange-500'><a href="">Industrial Trasportation</a></li>
              <li className='hover:text-orange-500'><a href="">Vehichle Trasportatin Services</a></li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="bg-white text-center  px-5 py-5 text-gray-500 text-[15px]">
          Copyright ©2024 Ashoka Transport Company. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
