// import React from 'react'

// const Service = () => {
//   return (
//    <>
//    <div className='w-full px-36 text-center py-6 bg-orange-100'>
//     <span className='text-orange-500 bg-orange-200 px-3 py-1 rounded-full'> Our Service</span>
//     <h2 className='text-5xl font-semibold py-4'>Your Logistics, Our Expertise</h2>
//     <p  className='text-gray-600 py-4 text-lg'>We provide comprehensive and reliable transportation solutions for a wide variety of goods, ensuring safety, timeliness, and compliance at every stage. Our services include the handling and delivery of:</p>
//    </div>

//     <div className='w-full px-36 bg-orange-100 py-10'>
//   <div className='group hover:bg-orange-500 bg-white rounded-lg p-10'>
//     <h3 className='text-xl group-hover:text-white font-semibold'>
//       Express Delivery Services
//     </h3>
//     <p className='text-gray-500 py-4 group-hover:text-gray-500'>
//       We provide comprehensive and reliable transportation solutions for a wide variety of goods, ensuring safety, timeliness, and compliance at every stage. Our services include the handling and delivery of:
//     </p>

//     {[
//       {
//         title: "Electronic Appliances",
//         desc: "TVs, computers, mobile devices, kitchen gadgets Special packaging and handling to prevent damage from shocks or moisture"
//       },
//       {
//         title: "Perishable Goods",
//         desc: "Fruits, vegetables, dairy, meat, and frozen products Temperature-controlled logistics with real-time tracking"
//       },
//       {
//         title: "Machinery & Spare Parts",
//         desc: "Industrial equipment, engines, and components Secured transportation with loading/unloading assistance"
//       },
//       {
//         title: "Vehicles & Spare Parts",
//         desc: "Motorbikes, cars, auto parts Specialized carriers for safe transport of heavy and valuable items"
//       },
//       {
//         title: "Non-Perishable Goods",
//         desc: "Packaged food, dry goods, canned items Safe storage and bulk transportation solutions"
//       },
//       {
//         title: "Medicines & Pharmaceuticals",
//         desc: "Cold chain logistics for temperature-sensitive drugs Compliance with health and safety regulations"
//       },
//       {
//         title: "Garments & Textiles",
//         desc: "Retail and bulk clothing shipments Wrinkle-free delivery and protective packaging"
//       },
//       {
//         title: "Fragile Items",
//         desc: "Glassware, ceramics, electronics Extra cushioning and “fragile” labeling for damage prevention"
//       },
//       {
//         title: "Dangerous Goods",
//         desc: "Chemicals, flammable items, batteries Transport in compliance with local and international safety standards (ADR, IMDG, IATA)"
//       }
//     ].map((item, index) => (
//       <div key={index} className='py-4'>
//         <h2 className='text-2xl font-semibold group-hover:text-white'>
//           {index + 1}. {item.title}
//         </h2>
//         <p className='text-gray-500 group-hover:text-gray-200'>
//           {item.desc}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>


//    </>
//   )
// }

// export default Service

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Service = () => {

  useGSAP(()=>{
    
    gsap.from(".header ",{
      y:-80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".header",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 60%",
        end:"top 40%"

      }
    })
     gsap.from(".service-secion ",{
      y:40,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".service-secion",
        scroll:"body",
        scrub:2,
        markers:false,
        start:"top 80%",
        end:"top 60%"

      }
    })

  
  
  })


  return (
    <>
      {/* Header Section */}
      <div className="header w-full px-6 md:px-36 text-center py-6 bg-orange-100">
        <span className="text-orange-500 bg-orange-200 px-3 py-1 rounded-full">Our Service</span>
        <h2 className="text-3xl md:text-5xl font-semibold py-4">Your Logistics, Our Expertise</h2>
        <p className="text-gray-600 py-4 text-base md:text-lg">
          We provide comprehensive and reliable transportation solutions for a wide variety of goods,
          ensuring safety, timeliness, and compliance at every stage. Our services include the handling
          and delivery of:
        </p>
      </div>

      {/* Service List */}
      <div className="service-secion w-full px-6 md:px-36 bg-orange-100 py-10">
        <div className="group hover:bg-orange-500 bg-white rounded-lg p-6 md:p-10 transition-colors duration-300">
          <h3 className="text-xl md:text-2xl group-hover:text-white font-semibold">
            Express Delivery Services
          </h3>
          <p className="text-gray-500 py-4 text-sm md:text-base group-hover:text-gray-300">
            We provide comprehensive and reliable transportation solutions for a wide variety of goods,
            ensuring safety, timeliness, and compliance at every stage. Our services include the handling
            and delivery of:
          </p>

          {/* Mapped Service Items */}
          {[
            {
              title: "Electronic Appliances",
              desc: "TVs, computers, mobile devices, kitchen gadgets. Special packaging and handling to prevent damage from shocks or moisture"
            },
            {
              title: "Perishable Goods",
              desc: "Fruits, vegetables, dairy, meat, and frozen products. Temperature-controlled logistics with real-time tracking"
            },
            {
              title: "Machinery & Spare Parts",
              desc: "Industrial equipment, engines, and components. Secured transportation with loading/unloading assistance"
            },
            {
              title: "Vehicles & Spare Parts",
              desc: "Motorbikes, cars, auto parts. Specialized carriers for safe transport of heavy and valuable items"
            },
            {
              title: "Non-Perishable Goods",
              desc: "Packaged food, dry goods, canned items. Safe storage and bulk transportation solutions"
            },
            {
              title: "Medicines & Pharmaceuticals",
              desc: "Cold chain logistics for temperature-sensitive drugs. Compliance with health and safety regulations"
            },
            {
              title: "Garments & Textiles",
              desc: "Retail and bulk clothing shipments. Wrinkle-free delivery and protective packaging"
            },
            {
              title: "Fragile Items",
              desc: "Glassware, ceramics, electronics. Extra cushioning and “fragile” labeling for damage prevention"
            },
            {
              title: "Dangerous Goods",
              desc: "Chemicals, flammable items, batteries. Transport in compliance with local and international safety standards (ADR, IMDG, IATA)"
            }
          ].map((item, index) => (
            <div key={index} className="py-4">
              <h2 className="text-lg md:text-2xl font-semibold group-hover:text-white">
                {index + 1}. {item.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base group-hover:text-gray-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
