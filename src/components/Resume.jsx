import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import myResume from "../assets/My CV.pdf";
import backgroundimage from "../assets/images/moon.jpg"; 

function Resume() {
  return (
    

      <div
          className="w-full min-h-screen bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundimage}")`, // Your background image
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="about"
        >
          <div
      className="w-full min-h-screen bg-cover bg-fixed py-10 px-4"
      style={{
        backgroundImage: `url('/path/to/your/image.jpg')`, // Update with your image path
      }}
    >
      <div className=" bg-opacity-70 w-full flex flex-col items-center  px-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">My Resume</h1>

        <a
          href={myResume}
          download="My_Resume.pdf"
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mb-6"
        >
          <AiOutlineDownload className="mr-2 text-lg" />
          Download Resume
        </a>

        <div className="w-full max-w-4xl h-[80vh] shadow-xl rounded-md overflow-hidden">
          <iframe
            src={myResume}
            title="My Resume"
            width="100%"
            height="100%"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
        </div>
  );
}

export default Resume;
