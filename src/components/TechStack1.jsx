import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa"; // For HTML and CSS
import { SiBootstrap, SiTailwindcss} from "react-icons/si"; // For Bootstrap, Tailwind CSS, Material UI
import { SiRedux } from "react-icons/si"; // For Redux Toolkit

function Techstack() {
    const techStack = [
        { Icon: FaHtml5 },        // HTML
        { Icon: FaCss3Alt },      // CSS
        { Icon: DiJavascript1 },   // JavaScript
        { Icon: DiReact },         // React.js
        { Icon: SiNextdotjs },     // Next.js
        { Icon: DiGit },           // Git
        { Icon: SiBootstrap },     // Bootstrap
        { Icon: SiTailwindcss },   // Tailwind CSS
        // { Icon: SiMaterialui },    // Material UI
        { Icon: SiRedux },         // Redux Toolkit
      ];

  return (
    <div className="max-w-[70%] mx-auto flex flex-wrap justify-center gap-6 pb-12">
      {techStack.map((tech, index) => (
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

export default Techstack;
