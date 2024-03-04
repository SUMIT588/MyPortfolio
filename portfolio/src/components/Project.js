import Footer from "./Footer";
import React from "react";
import currencyConverter from "../image/currencyConverter.PNG";
import passwordGenerator from '../image/passwordGenerator.PNG'
import sajiloFutsal from "../image/sajiloFutsal.png";
import timeTracker from "../image/timeTracker.png";

function Project() {
  const images = [
    {
      src: currencyConverter,
      alt: "Currency converter",
    },
    
    {
      src: timeTracker,
      alt: "Time Tracker",
    },
    {
      src: passwordGenerator,
      alt: "password Generator",
    },
    {
      src: sajiloFutsal,
      alt: "sajilo Futsal",
    },
  ];

  return (
    <div>
      <div className="bg-[#d7d6d6] min-h-screen flex items-center  flex-col pb-20 ">
        <h2 className="text-3xl font-bold tracking-widest mt-4 mb-10 border-b-2 border-gray-600 pb-2">
          Portfolio
        </h2>
        <div className="grid grid-cols-2 gap-20">
          {images.map((image, index) => (
            <div key={index} className="w-80">
              <img
                className="h-60 w-full object-cover rounded-lg mb-2"
                src={image.src}
                alt={image.alt}
              />
              <p className="text-gray-800 text-center uppercase font-montserrat text-base font-normal tracking-widest ">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
