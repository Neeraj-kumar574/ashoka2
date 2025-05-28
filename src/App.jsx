// import React from 'react'
// import Navbar from './components/Navbar'
// import Second from './components/Second'
// import Service from './components/Service'

// const App = () => {
//   return (
//    <>
//    <Navbar/>
//    {/* <Second/> */}
//    {/* <Service/> */}
//    <Footer/>
//    </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Second from './components/Second';
import Service from './components/Service';
import Footer from './components/Footer';
import Services from './components/Services';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="https://ashoka2.vercel.app/about" element={<AboutUs />} />
        <Route path="https://ashoka2.vercel.app/service" element={<Services />} />
        <Route path="https://ashoka2.vercel.app/gallery" element={<Gallery />} />
        <Route path="https://ashoka2.vercel.app/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
