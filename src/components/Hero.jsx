import React from "react";
// import { Container, Row, Col } from "react-bootstrap"; // You can remove these imports since we're not using React Bootstrap anymore
// import homeLogo from "../../public/images/home.png"; // Adjust the path as necessary
import Particle from "./Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeMain from "../assets/images/home-main.svg";
// import Footer from "./Footer"; // Importing Footer component
import { motion as Motion } from "framer-motion"; // Importing framer-motion for animations

function Home() {
  return (
    <section>
      <div
        className="w-full min-h-screen bg-gray-600 relative bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${"src/assets/images/moon.jpg"})`, // Your background image
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keeps the background fixed while content scrolls
          backgroundSize: "cover", // Ensures the background covers the entire viewport
        }}
        id="home"
      >
        {/* Background animation */}
        <Particle />

        {/* Hero Content */}
        <div className="w-full px-6 py-24 lg:px-24 xl:px-48 absolute top-20 left-0 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text content */}
            <div className="lg:w-7/12 w-full text-left">
              <h1 className="text-5xl font-bold text-white pb-4">
                Hi There!{" "}
                <Motion.span
                  role="img"
                  aria-label="wave"
                  className="text-5xl inline-block"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ transformOrigin: "90% 90%" }}
                >
                  👋🏻
                </Motion.span>
              </h1>

              <h1 className="text-5xl font-extrabold text-white">
                I'M <strong className="text-purple-600">CHITRANSH JAWRE</strong>
              </h1>

              <div className="py-12">
                <Type />
              </div>
            </div>

            {/* Profile illustration */}
            <div className="lg:w-5/12 w-full flex justify-center">
              <img
                src={homeMain}
                alt="home pic"
                className="max-h-[450px] object-contain"
              />
            </div>
          </div>
        </div>
        <Home2 />
      </div>
      
    </section>
  );
}

export default Home;
