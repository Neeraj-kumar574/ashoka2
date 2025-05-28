// components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import anim from '../images/anim.png'

const slides = [

  {
    title:'"Connecting Destinations with Precision and Care"',
    subtitle:"Ashoka Transport Company",
    description:"No matter the size or distance, we’re committed to delivering your cargo securely, swiftly, and professionally.",
    bg: "https://ashokatransportcompany.in/assets/img/slider/hero1.png",
    truck: "https://ashokatransportcompany.in/assets/img/slider/her-2-shape.png",
  },
  {
    title: '"Transport Made Easy And Efficient"',
    subtitle: "Ashoka Transport Company",
    description:
      "Our team works around the clock to provide smooth, hassle-free transport services you can depend on.",
    bg: "https://ashokatransportcompany.in/assets/img/slider/hero1.png",
    truck: "https://ashokatransportcompany.in/assets/img/slider/her-2-shape.png",
  },
  {
    title: '"Driven by Reliability, Powered by Speed"',
    subtitle: "Ashoka Transport Company",
    description:
      "We specialize in safe, on-time deliveries—across town or across the country.",
    bg: "https://ashokatransportcompany.in/assets/img/slider/hero1.png",
    truck: "https://ashokatransportcompany.in/assets/img/slider/her-2-shape.png",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full flex">
              {/* Background with zoom animation */}
              <div
                className="absolute inset-0 bg-cover bg-center animate-zoomIn transition-all duration-[6000ms]"
                style={{ backgroundImage: `url(${slide.bg})` }}
              ></div>

              {/* Left content */}
              <div className="relative z-10 w-1/2  flex items-center pl-10 md:pl-20 text-white bg-black/30">
           <img src={anim} className="absolute left-2 bottom-2 z-[-2] animate-slow-bounce " alt="" />

                <div className="max-w-md space-y-6">
                  <span className="bg-white/20 text-white px-4 py-1 rounded-full inline-block font-semibold">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
                  <p>{slide.description}</p>
                  <a
                    href="/services"
                    className="inline-block hover:bg-transparent hover:border-orange-500 hover:border-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
                  >
                    Our Service <i className="fa-solid fa-angle-right ml-2"></i> <span>&#10148;</span>
                  </a>
                </div>
             
              </div>

              {/* Right truck image and curved shape */}
              <div className="relative w-1/2 hidden md:block z-10 overflow-hidden">
                <img
                  src={slide.truck}
                  alt="truck"
                  className="w-full h-full object-cover animate-zoomIn"
                />
                {/* <div className="absolute inset-y-0 left-0 w-24 bg-orange-600  origin-left"></div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
