// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, setExpand] = useState(false);
//   const [navColour, setNavColour] = useState(false);
//   const location = useLocation();

//   const scrollHandler = () => {
//     if (window.scrollY >= 20) {
//       setNavColour(true);
//     } else {
//       setNavColour(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", scrollHandler);
//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, []);

//   const navLinks = [
//     { name: "Home", to: "/", icon: <AiOutlineHome /> },
//     { name: "About", to: "/about", icon: <AiOutlineUser /> },
//     { name: "Projects", to: "/projects", icon: <AiOutlineFundProjectionScreen /> },
//     { name: "Resume", to: "/resume", icon: <CgFileDocument /> },
//     // Example external blog (you can uncomment if needed)
//     // { name: "Blogs", external: true, to: "https://example.com", icon: <ImBlog /> },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all py-3 ${navColour ? "bg-[rgba(0,0,0,0.3)] backdrop-blur-md" : "bg-transparent"
//         }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Brand */}
//         <Link to="/" className="text-purple-500 hidden md:flex text-2xl font-bold">
//           CJ
//         </Link>

//         {/* Mobile Toggle Button */}
//         <div className="flex-1 flex justify-end md:hidden">
//           <button
//             className="text-white text-3xl"
//             onClick={() => setExpand(!expand)}
//           >
//             ☰
//           </button>
//         </div>



//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex md:space-x-6 items-center text-white text-lg">
//           {navLinks.map((link, index) => (
//             <li key={index} className="relative group">
//               {link.external ? (
//                 <a
//                   href={link.to}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-1 px-2 py-1"
//                 >
//                   {link.icon} {link.name}
//                   <motion.div
//                     className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
//                     layoutId="underline"
//                   />
//                 </a>
//               ) : (
//                 <Link
//                   to={link.to}
//                   className="flex items-center gap-1 px-2 py-1"
//                 >
//                   {link.icon} {link.name}
//                   {location.pathname === link.to && (
//                     <motion.div
//                       layoutId="underline"
//                       className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-full"
//                     />
//                   )}
//                   <motion.div
//                     className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
//                   />
//                 </Link>
//               )}
//             </li>
//           ))}
//           {/* GitHub Button */}
//           <li>
//             <a
//               href="https://github.com/ChitranshJNGTS"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-white text-red-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-red-200 transition"
//             >
//               <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Navbar */}
//         {expand && (
//           <div className="w-full md:hidden mt-4 bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-md py-4 px-2 transition-all duration-300">
//             <ul className="flex flex-col items-center space-y-4 text-white text-lg">

//               {navLinks.map((link, index) => (
//                 <li key={index} className="relative group">
                  
//                   {link.external ? (
                    
//                     <a
//                       href={link.to}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center gap-1 px-2 py-1"
//                       onClick={() => setExpand(false)}
//                     >
//                       {link.icon} {link.name}
//                       <motion.div
//                         className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
//                         layoutId="underline"
//                       />
//                     </a>
//                   ) : (
//                     <Link
//                       to={link.to}
//                       onClick={() => setExpand(false)}
//                       className="flex items-center gap-1 px-2 py-1"
//                     >
//                       {link.icon} {link.name}
//                       {location.pathname === link.to && (
//                         <motion.div
//                           layoutId="underline"
//                           className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-full"
//                         />
//                       )}
//                       <motion.div
//                         className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
//                       />
//                     </Link>
//                   )}
//                 </li>
//               ))}

//               <li>
//                 <a
//                   href="https://github.com/ChitranshJNGTS"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-white text-red-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-red-200 transition"
//                 >
//                   <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { name: "Home", to: "/", icon: <AiOutlineHome /> },
    { name: "About", to: "/about", icon: <AiOutlineUser /> },
    { name: "Projects", to: "/projects", icon: <AiOutlineFundProjectionScreen /> },
    { name: "Resume", to: "/resume", icon: <CgFileDocument /> },
    // Example external blog (you can uncomment if needed)
    // { name: "Blogs", external: true, to: "https://example.com", icon: <ImBlog /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all py-3 ${
        navColour ? "bg-[rgba(0,0,0,0.3)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="text-purple-500 hidden md:flex text-2xl font-bold">
          CJ
        </Link>

        {/* Mobile Toggle Button */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setExpand(!expand)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex md:space-x-6 items-center text-white text-lg">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-2 py-1"
                >
                  {link.icon} {link.name}
                  <motion.div
                    className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
                    layoutId="underline"
                  />
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="flex items-center gap-1 px-2 py-1"
                >
                  {link.icon} {link.name}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-full"
                    />
                  )}
                  <motion.div
                    className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
                  />
                </Link>
              )}
            </li>
          ))}
          {/* GitHub Button */}
          <li>
            <a
              href="https://github.com/ChitranshJNGTS"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-red-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-red-200 transition"
            >
              <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
            </a>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <AnimatePresence>
          {expand && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 md:hidden mt-2 bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-md py-4 px-2 z-40"
            >
              <ul className="flex flex-col items-center space-y-4 text-white text-lg">
                {navLinks.map((link, index) => (
                  <li key={index} className="relative group">
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-2 py-1"
                        onClick={() => setExpand(false)}
                      >
                        {link.icon} {link.name}
                        <motion.div
                          className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
                          layoutId="underline"
                        />
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() => setExpand(false)}
                        className="flex items-center gap-1 px-2 py-1"
                      >
                        {link.icon} {link.name}
                        {location.pathname === link.to && (
                          <motion.div
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-0.5 bg-purple-600 w-full"
                          />
                        )}
                        <motion.div
                          className="absolute left-0 bottom-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
                        />
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <a
                    href="https://github.com/ChitranshJNGTS"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-red-800 px-3 py-1 rounded flex items-center gap-1 hover:bg-red-200 transition"
                  >
                    <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
