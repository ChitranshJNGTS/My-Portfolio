import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import backgroundimage from "../assets/images/moon.jpg"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tesla from "../assets/images/6.jpg";
import Flipkart from "../assets/images/next_gen_tech_services_logo.jpeg";
import Multiuser from "../assets/images/multiuser.png"
const MyProjects = () => {
  return (
    <div
      className="w-full  bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url("${backgroundimage}")`, // Your background image
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight:"90vh"
      }}
      id="projects"
    >
      {/* Overlay */}
      <div className="bg-opacity-70 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tesla Clone */}
            <a href="https://tesla-fake-web.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform duration-300">
                <img src={Tesla} alt="Tesla Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Tesla Clone</h3>
                <p className="text-gray-300">A fully responsive Tesla website clone built using React.js and Tailwind CSS. This project replicates the clean UI/UX of Tesla’s official website, including smooth animations, scroll-based effects, reusable components, and responsive layouts.</p>
                {/* <p className="text-sm text-gray-400 mt-2">Duration: 2 months</p> */}
              </div>
            </a>

            {/* Flipkart Clone */}
            <a href="https://next-gen-tech-web.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform duration-300">
                <img src={Flipkart} alt="Flipkart Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Next Gen Tech Solution </h3>
                <p className="text-gray-300">A modern, responsive business website created for NGTS (Next-Gen Tech Solutions) to showcase services, products, and company information in a professional layout. Built with React.js and Tailwind CSS, it delivers fast performance and a sleek UI.</p>
                {/* <p className="text-sm text-gray-400 mt-2">Duration: 3 months</p> */}
              </div>
            </a>

            {/* O2 Bharat Clone */}
            <a href="https://my-portfolio-cj.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform duration-300">
                <img src={Multiuser} alt="O2 Bharat Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Multi User Login Page</h3>
                <p className="text-gray-300">Users are authenticated based on their role using credentials (email & password). Upon login, they are redirected to role-specific dashboards.</p>
                {/* <p className="text-sm text-gray-400 mt-2">Duration: 1.5 months</p> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
