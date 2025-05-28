
import Navbar from './Navbar'
import Second from './Second'
import Service from './Service'
import Footer from './Footer'
import shape from '../images/shape.png'

import HeroSlider from './Slider'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Home = () => {

  useGSAP(()=>{
 gsap.from(".left-img ",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".left-img",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
    })
     gsap.from(".right-form ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".right-form",
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
    <Navbar />
     <HeroSlider/>
    <Second/>
    <Service/>
   

     <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#f8f5f2] overflow-x-hidden ">
      {/* Left Side Image */}
      <div className="left-img relative w-full lg:w-1/2 h-96 lg:h-auto overflow-hidden">
        <img
          src={shape}
          alt="Worker"
          className="object-cover w-full h-full"
        />
        {/* Orange curve overlay */}
        <div className="hidden lg:block absolute top-0 right-0 w-20 h-full rounded-tl-[9999px] rounded-bl-[9999px]"></div>
      </div>

      {/* Right Side Form */}
      <div className="right-form w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <form className="w-full max-w-2xl">
          <span className="text-sm text-[#f9641c] font-semibold mb-2 bg-orange-200 px-3 py-1 rounded-full">| Contact Us</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-2 py-2">Get In Touch With Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Reach out today for a free consultation or quote!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Service Type"
            className="p-3 border border-gray-300 rounded w-full mt-4"
          />
          <textarea
            placeholder="Message"
            className="p-3 border border-gray-300 rounded w-full mt-4 h-28"
          ></textarea>

          <button
            type="submit"
            className="mt-6 hover:bg-black bg-[#f9641c] text-xl text-white py-3 px-6 rounded-full font-semibold hover:bg-[#e85513] transition-all flex items-center gap-2"
          >
            Submit Now
            <span className="text-xl">&gt;</span>
          </button>
        </form>
      </div>
    </div>

 
    <Footer/>
    </>
  )
}

export default Home