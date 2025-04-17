import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["React Developer","Frontend Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "text-3xl text-purple-600 font-bold", // Tailwind classes
      }}
    />
  );
}

export default Type;
