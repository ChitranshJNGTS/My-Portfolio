import React from "react";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfessionalWork from "./ProfessionalWork";

function Home2() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,}
  return (
    <div className="w-full transparent py-24"  id="about">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-8/12 w-full mt-190 lg:mt-160 text-white">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
              LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="text-purple-500">  Javascript  </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="text-purple-500">Web Technologies and Products</b> and
                also in areas related to{" "}
                <b className="text-purple-500">AI tools</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="text-purple-500">Node.js</b> and
              <i>
                <b className="text-purple-500">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-purple-500"> Express.js and MongoDB</b>
              </i>
            </p>
          </div>
          <div className="lg:w-4/12 w-full flex justify-center mt-12 lg:mt-0">
            <Tilt>
              <img
                src={"src/assets/images/avatar.svg"}
                className="max-h-[450px] object-contain lg:mt-150 rounded-full shadow-lg"
                alt="avatar"
              />
            </Tilt>
          </div>
        </div>
           {/* Carousel Section */}
        <ProfessionalWork/>
        <div className="mt-16 text-center text-white">
          <h1 className="text-3xl font-semibold">FIND ME ON</h1>
          <p className="mt-2">
            Feel free to <span className="text-purple-500">connect</span> with me
          </p>
          <ul className="flex justify-center space-x-6 mt-6">
            <li>
              <a
                href="https://github.com/ChitranshJNGTS"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-500"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li>
              <a
                href="https://twitter.com/Soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-500"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/chitransh-jawre-80338b332/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-500"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.instagram.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-500"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home2;
