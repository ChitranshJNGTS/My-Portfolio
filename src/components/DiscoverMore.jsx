import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscoverMore = () => {
  return (
    <>
     
      {/* Hidden to Visible Section */}
      <section className="py-20 bg-gray-600 flex justify-center items-center min-h-75">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-black p-10 rounded-lg shadow-[0px_0px_20px_rgba(255,215,0,0.5)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2 flex justify-center items-center p-5">
          <img src="src/assets/images/my image.jpg" alt="Image" className="rounded-full w-[250px] h-[250px]" />

          </div>
          <div className="w-full md:w-1/2 p-5 text-center md:text-left text-yellow-400">
            <h2 className="text-4xl font-bold mb-4">Discover More About Me</h2>
            <p className="text-lg text-gray-300">
              I am a passionate front-end developer skilled in React.js,
              dedicated to crafting dynamic and visually engaging user interfaces.
              With experience in Tailwind CSS, Bootstrap, and state management tools like Redux,
              I build seamless and high-performance applications.
            </p>
          </div>
        </motion.div>
      </section> 
    </>
  )
}

export default DiscoverMore
