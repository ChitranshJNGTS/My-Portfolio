import React from 'react';
import { motion } from "framer-motion";
import "../App.css";
import Lottie from 'lottie-react';
import AboutAnimation from "../assets/AboutAnimation - 1743665781169.json";
import backgroundimage from "../assets/images/moon.jpg"; 

const About = () => {
  return (
    <div
      className="w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundimage})`, // Your background image
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
      id="about"
    >
      {/* Overlay for better readability */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          {/* Animation on the Left */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Lottie animationData={AboutAnimation} className="max-w-xs md:max-w-md" />
          </div>

          {/* Text Content on the Right */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <motion.h2
              className="text-4xl font-bold mb-6 text-purple-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Hi, I'm Chitransh Jawre, a passionate Front-End Developer with expertise in React.js, Tailwind CSS, and modern UI frameworks. I love turning ideas into interactive, user-friendly web applications.
            </motion.p>

            <motion.p
              className="text-lg mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              Currently in my final year of B.Tech in Electronics & Communication, I have worked on various projects, including a Tesla UI clone, an O2 Bharat website replica, and a Flipkart clone with Redux integration.
            </motion.p>

            <motion.p
              className="text-lg mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              My goal is to become a VP of Engineering or CTO, leading teams to build scalable and impactful digital solutions. I believe in continuous learning, pushing boundaries, and leveraging AI tools like ChatGPT to enhance development workflows.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
