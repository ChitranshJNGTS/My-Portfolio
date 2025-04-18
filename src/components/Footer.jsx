import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left section - Designer and Developer info */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <h3>Designed and Developed by Chitransh Jawre</h3>
          </div>

          {/* Center section - Copyright */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <h3>Copyright © {year} CJ</h3>
          </div>

          {/* Right section - Social Icons */}
          <div className="w-full md:w-1/3 text-center">
            <ul className="flex justify-center space-x-6">
              <li>
                <a
                  href="https://github.com/ChitranshJNGTS"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={24} />
                </a>
              </li>
              {/* <li>
                <a
                  href=""
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/in/chitransh-jawre-80338b332/"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              {/* <li>
                <a
                  href=""
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={24} />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
