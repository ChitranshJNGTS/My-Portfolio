import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../components/Contact";
import MyProjects from "../components/MyProjects";
import DiscoverMore from "../components/DiscoverMore";
import ProfessionalWork from "../components/ProfessionalWork";
import NavBar from "../components/NavBar";
import React from "react";
import Footer from "../components/Footer";
import ResumeNew from "../components/Resume";
// import ResumeNew from "../components/Resume";

export default function AppRoutes() {
  return (
    <Router>
      <NavBar />  {/* Navbar stays at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/resume" element={<ResumeNew/>} />
        <Route path="/work" element={<ProfessionalWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}
