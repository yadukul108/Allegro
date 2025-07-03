import React from 'react'
import HomeIB from "../assets/HomeIB.jpg"
import {Link} from "react-router-dom"
import Cards from '../components/Cards'
import ServicesCards from '../components/ServicesCards'
import Awards from '../components/Awards'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
//import About from "./About"
const Home = () => {
  return (
   <div className="relative w-full pt-[3rem] h-[500px] bg-slate-200" >
      {/* Background Image */}
      <img
        src={HomeIB}
        alt="Banner"
        className="w-full h-[34rem] object-cover rounded-md grey-tone"
      />

      {/* Top-Left Text */}
     <div className="absolute top-[5rem] left-6 text-white">
  <h2 className="text-3xl md:text-3xl font-bold drop-shadow-md">
    An Independent Full-Service Investment Bank
  </h2>
  <p className="text-base md:text-lg mt-1 drop-shadow-md w-auto md:w-[50rem]">
    Allegro Advisors is a leading healthcare investment bank in India, providing comprehensive financial solutions to meet the diverse needs of our clients.
  </p>
</div>


      {/* Bottom-Center Buttons */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-4 text-center w-max">
        <Link
          to="/services"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Our Services
        </Link>
        <Link
          to="/contact"
          className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
      <Cards/>
     <Stats/>
     
  <ServicesCards/>
 
  <Awards/>
 <Footer/>
    </div>
  )
}

export default Home
