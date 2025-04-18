import React from "react";
import { SiPostman, SiNetlify, SiHostinger } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function TechIcons() {
  const techIcons = [
    { Icon: SiPostman, },
    { Icon: SiNetlify,},
    { Icon: SiHostinger,  },
    { Icon: FaRobot, },
  ];

  return (
     <div className="max-w-[70%] mx-auto flex flex-wrap justify-center gap-6 pb-12">
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className="w-36 h-36 flex items-center justify-center rounded-xl border-2 border-purple-300 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <tech.Icon className="text-7xl text-white" /> {/* Increased icon size */}
        </div>
      ))}
    </div>
  );
}

export default TechIcons;
