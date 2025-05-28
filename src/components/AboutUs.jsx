import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import truck from '../images/truck2.jpg'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import { IoChevronForward } from 'react-icons/io5';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const AboutUs = () => {
 useGSAP(()=>{
    
    gsap.from(".top-section ",{
      y:-100,
      duration:0.7,
      opacity:0,
   
    })
    gsap.from(".mid-section ",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".mid-section",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 80%",
        end:"top 40%"

      }
    })
     gsap.from(".mid-right ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".mid-right",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 40%",
        end:"top 20%"

      }
    })
    gsap.from(".bottom-left ",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".bottom-left",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
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
       
const features = [
  {
    title: "Reliable & On-Time Delivery",
    description:
      "We understand that time is money. Our commitment to punctuality ensures that your goods arrive safely and on schedule, every time.",
  },
  {
    title: "Affordable & Transparent Pricing",
    description:
      "We offer competitive rates with no hidden fees. Our pricing is straightforward, and we work with you to find the best value solution for your shipping needs.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "Whether it’s local or long-haul, our extensive network spans across the country, providing seamless transportation wherever your business needs it.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We believe in transparent communication and personalized service. From pickup to delivery, you’ll always know where your shipment is—and that it’s in good hands.",
  },
];
  return (
   <>
   <Navbar/>

    <section className="top-section bg-gray-50  px-4">
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

    
        <h1 className="text-6xl font-bold text-gray-900">About Us</h1>

     
        <div className="flex justify-center items-center text-lg text-gray-700 mt-2 space-x-1">
          <span className="hover:text-blue-600  text-lg font-semibold cursor-pointer">Home</span>
          <IoChevronForward size={18} />
          <span className="font-semibold">About Us</span>
        </div>
      </div>
    </section>

      <section className= " bg-white py-16 px-8 md:px-36">
      <div className="mid-section grid md:grid-cols-2 gap-12 items-center">
      
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={boy}
            alt="Logistics Team"
            className="rounded-xl shadow-md w-full h-auto"
          />
          <img
            src={girl}
            alt="Warehouse Staff"
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className='mid-right'>
          <span className=" inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            | Why We Are
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Commitment: Reliable<br />And Efficient Logistics
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            At Ashoka Transport Company, we exist to bridge the distance between people,
            products, and progress. Transportation is more than just moving cargo—it’s about
            delivering trust, building connections, and driving business forward.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-gray-800 font-medium">
            <p>✅ Experts in Logistics Management</p>
            <p>✅ Nationwide Coverage</p>
            <p>✅ Transforming Transport & Logistics</p>
            <p>✅ Driving Logistics Success</p>
          </div>

          {/* Quote Box */}
          <div className="bg-gray-100 text-gray-700 text-base p-6 rounded-lg border-l-4 border-blue-600">
            Behind every successful delivery is a team of dedicated professionals who care deeply about the job. We invest in our people so they can invest in our customers.
          </div>
        </div>
      </div>
    </section>
        <section className= " bg-gray-50 py-16 px-8 md:px-36">
      <div className="bottom-left grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            | Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet The Team: Experts<br />
            In Logistics Management
          </h2>
          <p className="text-gray-600 text-lg">
            We pride ourselves on our global reach and local expertise, allowing us to offer tailored services that meet the unique needs of each client.
            <br /><br />
            At Ashoka Transport Company, we are not just moving goods; we are driving success and creating opportunities.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className='bottom-right'>
          <img
            src={truck}
            alt="Truck logistics"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
        <div className="last  grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    
    
 

    <Footer/>
   </>
  )
}

export default AboutUs