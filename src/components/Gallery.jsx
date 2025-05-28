import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { IoChevronForward } from 'react-icons/io5';

const Gallery = () => {

    const images = [
        { src: "./src/images/image1.jpeg", alt: 'Truck 1' },
        { src: './src/images/image2.jpeg', alt: 'Road' },
        { src: './src/images/image3.jpeg', alt: 'Image 1' },
        { src: './src/images/image4.jpeg', alt: 'Pic 1' },
        { src: './src/images/image5.jpeg', alt: 'Van' },
        { src: './src/images/image6.jpeg', alt: 'Truck 2' },
        { src: './src/images/image7.jpeg', alt: 'Truck 2' },
        { src: './src/images/image8.jpeg', alt: 'Truck 2' },
        { src: './src/images/image9.jpeg', alt: 'Truck 2' },
        { src: './src/images/image10.jpeg', alt: 'Truck 2' },
         { src: "./src/images/image11.jpeg", alt: 'Truck 1' },
        { src: './src/images/image12.jpeg', alt: 'Road' },
        { src: './src/images/image13.jpeg', alt: 'Image 1' },
        { src: './src/images/image14.jpeg', alt: 'Pic 1' },
        { src: './src/images/image15.jpeg', alt: 'Van' },
        { src: './src/images/image16.jpeg', alt: 'Truck 2' },
        { src: './src/images/image17.jpeg', alt: 'Truck 2' },
        { src: './src/images/image18.jpeg', alt: 'Truck 2' },
        { src: './src/images/image19.jpeg', alt: 'Truck 2' },
        { src: './src/images/image20.jpeg', alt: 'Truck 2' },
         { src: "./src/images/image21.jpeg", alt: 'Truck 1' },
        { src: './src/images/image22.jpeg', alt: 'Road' },
        { src: './src/images/image23.jpeg', alt: 'Image 1' },
        { src: './src/images/image24.jpeg', alt: 'Pic 1' },
        { src: './src/images/image25.jpeg', alt: 'Van' },
        { src: './src/images/image26.jpeg', alt: 'Truck 2' },
        { src: './src/images/image27.jpeg', alt: 'Truck 2' },
        { src: './src/images/image28.jpeg', alt: 'Truck 2' },
    

        // ... add all 28 image objects here
    ];
    return (
        <>
            <Navbar />

                <section className="top-service  px-4 ">
                    <div className="max-w-4xl mx-auto text-center relative">
                  
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
              
                  
                      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Our Image Gallery</h1>
              
                   
                      <div className="flex justify-center items-center text-lg text-gray-700 mt-2 space-x-1">
                        <span className="hover:text-blue-600   text-lg font-semibold cursor-pointer">Home</span>
                        <IoChevronForward size={18} />
                        <span className="font-semibold">Our Image Gallery</span>
                      </div>
                    </div>
                  </section>
   <div className="md:px-36  px-4 py-10 bg-orange-100">
<div className='text-center pb-8'>            <span className="text-orange-500 bg-orange-200 text-xl  px-3 py-1 rounded-full">Our Image Gallery</span>
</div>
        {/* <h2 className="text-2xl font-semibold mb-6 text-center">Image Gallery</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>


            <Footer />
        </>
    )
}

export default Gallery