import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {
 useGSAP(()=>{
    
    gsap.from(".top-contact ",{
      y:-100,
      duration:0.7,
      opacity:0,
   
    })
    gsap.from(".address-card ",{
      x:-100,
      duration:1,
      opacity:0,
     
    })
     gsap.from(".contact-card ",{
      y:-100,
      duration:1,
      opacity:0,
    
    })
    gsap.from(".email-card ",{
      x:100,
      duration:1,
      opacity:0,
 
    })
      gsap.from(".bottom-right ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".bottom-right",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
    })
     gsap.from(".last ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".last",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
    })
  })

  return (


   <>
   <Navbar/>
   <section className="bg-gray-50  px-4">
      <div className="top-contact max-w-4xl mx-auto text-center relative">
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

    
        <h1 className="text-6xl font-bold text-gray-900">Contact Us</h1>

     
        <div className="flex justify-center items-center text-lg text-gray-700 mt-2 space-x-1">
          <span className="hover:text-blue-600  text-lg font-semibold cursor-pointer">Home</span>
          <IoChevronForward size={18} />
          <span className="font-semibold">Contact Us</span>
        </div>
      </div>
    </section>




<div className="bg-gray-3200 py-14 px-5 md:px-36">
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Address Card */}
    <div className="address-card group hover:bg-blue-800 bg-white shadow-md p-6 rounded-lg flex items-start space-x-4 transition-colors duration-300">
      <div className="bg-blue-100 text-blue-600 rounded-full p-3 shrink-0">
        <FaMapMarkerAlt className="text-xl group-hover:text-gray-400" />
      </div>
      <div className="w-full break-words">
        <h4 className="text-lg font-semibold group-hover:text-white">Our Address</h4>
        <p className="text-sm mt-1 text-gray-700 group-hover:text-white">
          Shop No. 26 - 27, Workshop Lane, TPT Nagar, Ludhiana, Punjab
        </p>
      </div>
    </div>

    {/* Contact Card */}
    <div className="contact-card group hover:bg-blue-800 bg-white shadow-md p-6 rounded-lg flex items-start space-x-4 transition-colors duration-300">
      <div className="bg-blue-100 text-blue-600 rounded-full p-3 shrink-0">
        <FaPhoneAlt className="text-xl group-hover:text-gray-400" />
      </div>
      <div className="w-full break-words">
        <h4 className="text-lg font-semibold group-hover:text-white">Contact Us</h4>
        <p className="text-sm mt-1 group-hover:text-white">+91 9357566978</p>
        <p className="text-sm group-hover:text-white">+91 9317802767</p>
      </div>
    </div>

    {/* Email Card */}
    <div className="email-card group hover:bg-blue-800 bg-white shadow-md p-6 rounded-lg flex items-start space-x-4 transition-colors duration-300">
      <div className="bg-blue-100 text-blue-600 rounded-full p-3 shrink-0">
        <FaEnvelope className="text-xl group-hover:text-gray-400" />
      </div>
      <div className="w-full break-words">
        <h4 className="text-lg font-semibold group-hover:text-white">Email Us</h4>
        <p className="text-sm mt-1 group-hover:text-white break-all">ashokatransportcompany@gmail.com</p>
        <p className="text-sm group-hover:text-white break-all">info@ashokatransportcompany.in</p>
      </div>
    </div>

  </div>
</div>





  <div className="relative bg-gray-50 py-10">
      {/* Map background */}
      <div className="h-[400px] w-full">
        <iframe
          title="map"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.7488503638024!2d75.8775989!3d30.901744500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a832263891f47%3A0x602ba8ca8b14c296!2s27%2C%20Workshop%20Rd%2C%20Transport%20Nagar%2C%20Industrial%20Area-%20A%2C%20Ludhiana%2C%20Punjab%20141003!5e1!3m2!1sen!2sin!4v1747824777142!5m2!1sen!2sin"
          
        ></iframe>
        
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg -mt-40 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-2">Send Us Message</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Reach out today for a free consultation or quote! Your email address will not be published.
          Required fields are marked <span className="text-red-500">*</span>
        </p>

        {/* <form     action="https://formspree.io/f/mvgajeww"
  method="POST" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Service Type"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            className="border border-gray-300 p-3 rounded w-full"
          ></textarea>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="saveInfo" className="text-blue-600" />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              Save the information in this browser for next time use
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-black transition-transform text-white font-semibold px-6 py-2 rounded-full flex items-center space-x-2"
          >
            <span>Submit Now</span>
            <span>&#10148;</span>
          </button>


        </form> */}
        <form
  action="https://formspree.io/f/xjkwqnon"
  method="POST"
  className="space-y-4"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="first_name"
      placeholder="First Name"
      required
      className="border border-gray-300 p-3 rounded w-full"
    />
    <input
      type="text"
      name="last_name"
      placeholder="Last Name"
      required
      className="border border-gray-300 p-3 rounded w-full"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="border border-gray-300 p-3 rounded w-full"
    />
    <input
      type="text"
      name="service_type"
      placeholder="Service Type"
      className="border border-gray-300 p-3 rounded w-full"
    />
  </div>

  <textarea
    name="message"
    rows="4"
    placeholder="Message"
    required
    className="border border-gray-300 p-3 rounded w-full"
  ></textarea>

  <div className="flex items-center space-x-2">
    <input type="checkbox" id="saveInfo" />
    <label htmlFor="saveInfo" className="text-sm text-gray-600">
      Save the information in this browser for next time use
    </label>
  </div>

  <button
    type="submit"
    className="bg-blue-700 hover:bg-black text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2"
  >
    <span>Submit Now</span>
    <span>&#10148;</span>
  </button>
</form>

      </div>
    </div>

   <Footer/>
   </>
  )
}

export default ContactUs