import Footer from "./Footer";
import React from "react";
import figmaLogo from "../image/figma.png";
import gitLogo from "../image/git.png";
import jsLogo from "../image/js.svg";
import reactLogo from "../image/react.png";
import typeScriptLogo from "../image/typescript.png";

function Skills() {
  const logo = [
    {
      src: jsLogo,
      alt: "javascript",
      name: "Javascript",
    },
    {
      src: reactLogo,
      alt: "React",
      name: "React",
    },
    {
      src: figmaLogo,
      alt: "Figma",
      name: "Figma",
    },
    {
      src: gitLogo,
      alt: "Git",
      name: "git",
    },
    {
      src: typeScriptLogo,
      alt: "typescript",
      name: "typescript",
    },
  ];
  return (
    <div>
      <div className="bg-[#d7d6d6] min-h-screen flex items-center  flex-col ">
        <h2 className="text-3xl font-bold tracking-widest mt-4 mb-10  border-b-2 border-gray-600 pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-3 gap-20">
          {logo.map((img) => (
            <div className="flex flex-col items-center" key={img.name}>
              <img src={img.src} alt={img.alt} className="w-20 h-20 mb-2" />
              <p className="text-gray-800 text-center uppercase font-montserrat text-base font-normal tracking-widest">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
