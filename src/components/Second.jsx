

import React from 'react';
import About from "../images/about.png";
import { BsBuildings } from "react-icons/bs";
import { MdEmojiTransportation } from "react-icons/md";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Second = () => {
 useGSAP(()=>{
    
    gsap.from(".about-left ",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".about-left",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 20%"

      }
    })
    gsap.from(".about-right ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".about-left",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 20%"

      }
    })
     gsap.from(".about-img ",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".about-img",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 40%",
        end:"top 20%"

      }
    })
    gsap.from(".about-para ",{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".about-para",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 40%",
        end:"top 20%"

      }
    })
  })

  return (
    <>
      {/* About Intro Section */}
      <div className="w-full flex flex-col md:flex-row px-6 md:px-36 py-6 gap-6">
        <div className="w-full about-left">
          <span className="text-orange-500 bg-orange-200 px-3 py-1 rounded-full">| About Us</span>
          <h2 className="text-4xl lg:text-5xl py-4 font-semibold">
            At Ashoka Transport Company, we don’t just move goods — we move trust.
          </h2>
        </div>
        <div className="w-full about-right">
          <p className="text-gray-500 text-justify text-sm md:text-base">
            At Ashoka Transport Company, we are dedicated to delivering reliable, efficient, and secure
            transportation solutions tailored to meet the diverse needs of our clients. With years of
            industry experience, we specialize in the safe handling and timely delivery of a wide range
            of goods, including electronics, perishables, machinery, vehicles, pharmaceuticals, garments,
            fragile items, and hazardous materials. Our modern fleet, trained personnel, and commitment
            to quality ensure that every shipment—whether local or international—arrives on time and in
            perfect condition. We pride ourselves on our customer-first approach, offering real-time
            tracking, flexible scheduling, and end-to-end support to make logistics seamless and
            stress-free.
          </p>
        </div>
      </div>

      {/* Icon + Description Section */}
      <div className=" w-full flex flex-col lg:flex-row px-6 md:px-36 gap-8 py-16">
        {/* Image */}
        <div className="about-img w-full lg:w-4/12">
          <img src={About} alt="About Ashoka Transport" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text + Icons */}
        <div className="about-para w-full lg:w-8/12">
          {[
            {
              title: "Experts in Logistics Management",
              desc: "We are driving success & creating opportunities for growth. Discover the difference with a logistics"
            },
            {
              title: "Reliable and Efficient Logistics",
              desc: "Our mission is to redefine excellence in transport and logistics. With years of industry experience"
            },
            {
              title: "Transforming Transport and Logistics",
              desc: "Our dedicated team of experts works tirelessly to ensure that your goods are transported safely"
            }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-start sm:items-center py-6">
                <BsBuildings className="bg-orange-200 p-4 rounded-full text-5xl sm:text-6xl lg:text-7xl text-orange-500" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold py-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
              
              {index < 2 && <hr />}
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Second;
