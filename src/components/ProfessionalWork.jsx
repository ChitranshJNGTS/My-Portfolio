import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AarshRepro from "../assets/images/Aarsh-Repro.png";
import KidsHealth from "../assets/images/Kida_learning.png";
import BitGames from "../assets/images/Bit-Games.png";


const ProfessionalWork = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
      };
  return (
    <>
           {/* Carousel Section */}
           <section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
    <h2 className="text-4xl font-bold mb-6 text-yellow-400">Profestional work</h2>
    <Slider {...settings}>
      <div>
        <img src={KidsHealth} alt="Learning Kids" className="w-full h-96 object-cover rounded-lg" />
        <h3 className="mt-4 text-xl font-semibold text-yellow-400">Learning Kids (Under Development)</h3>
      </div>
      <div>
        <img src={AarshRepro} alt="Arsh Repro Health" className="w-full h-96 object-cover rounded-lg" />
        <h3 className="mt-4 text-xl font-semibold text-yellow-400">Arsh Repro Health (Under Development)</h3>
      </div>
      <div>
        <img src={BitGames} alt="Bet Games" className="w-full h-96 object-cover rounded-lg" />
        <h3 className="mt-4 text-xl font-semibold text-yellow-400">Bet Games (Under Development)</h3>
      </div>
    </Slider>
  </div>
</section> 
    </>
  )
}

export default ProfessionalWork
