import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyProjects = () => {
  return (
    <div
      className="w-full  bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url("src/assets/images/moon.jpg")`,
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
                <img src="src/assets/images/6.jpg" alt="Tesla Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Tesla Clone</h3>
                <p className="text-gray-300">A Tesla website clone built using React.js and Tailwind CSS.</p>
                {/* <p className="text-sm text-gray-400 mt-2">Duration: 2 months</p> */}
              </div>
            </a>

            {/* Flipkart Clone */}
            <a href="https://next-gen-tech-web.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform duration-300">
                <img src="src/assets/images/next_gen_tech_services_logo.jpeg" alt="Flipkart Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Next Gen Tech Solution (Clone)</h3>
                <p className="text-gray-300">A fully responsive Flipkart clone with product fetching and cart functionality.</p>
                {/* <p className="text-sm text-gray-400 mt-2">Duration: 3 months</p> */}
              </div>
            </a>

            {/* O2 Bharat Clone */}
            <a href="https://my-portfolio-cj.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform duration-300">
                <img src="src/assets/images/multiuser.png" alt="O2 Bharat Clone" className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-purple-600">Multi User Login Page</h3>
                <p className="text-gray-300">A replica of the O2 Bharat website built using Chakra UI.</p>
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
