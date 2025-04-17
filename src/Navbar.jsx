import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Navbar = () => {

  

 
  return (
    <>
  

 


      {/* Acting Skills Section */}
      {/* <section id="acting" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">My Acting Journey</h2>
          <p className="text-lg mb-8 text-gray-300">
            Besides coding, I have a deep passion for acting. I enjoy performing in theater, short films, and creating engaging content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-[0px_0px_15px_rgba(255,215,0,0.5)]">
              <img src="/image/acting1.jpg" alt="Acting Scene 1" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-yellow-400">Stage Performance</h3>
              <p className="text-gray-300">Played lead roles in multiple stage plays.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-[0px_0px_15px_rgba(255,215,0,0.5)]">
              <img src="/image/acting2.jpg" alt="Acting Scene 2" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-yellow-400">Short Films</h3>
              <p className="text-gray-300">Acted in and directed several independent short films.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-[0px_0px_15px_rgba(255,215,0,0.5)]">
              <img src="/image/acting3.jpg" alt="Acting Scene 3" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-yellow-400">Content Creation</h3>
              <p className="text-gray-300">Creating engaging video content for social media.</p>
            </div>
          </div>
        </div>
      </section> */}









 

      {/* Meet My Team Section */}
      {/* <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Meet My Team</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Brigitte Schwartz", img: "/image/team1.jpg" },
            { name: "Alfredo Torres", img: "/image/team2.jpg" },
            { name: "Adora Montminy", img: "/image/team3.jpg" },
            { name: "Daniel Gallego", img: "/image/team4.jpg" },
          ].map((member, index) => (
            <div key={index} className={`bg-gray-800 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mt-0' : 'mt-8'}`}>
              <img src={member.img} alt={member.name} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-yellow-400">{member.name}</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
    
    </>
  );
};

export default Navbar;
