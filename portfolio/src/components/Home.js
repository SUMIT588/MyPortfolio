import Contact from "./Contact";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="h-screen bg-gray-900 text-white p-20">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-[#F95353] font-mono text-2xl">HELLO!</h3>
        <h1 className="text-5xl font-semibold mt-4 ">I am a Web Developer</h1>
        <p className="font-normal mt-4 text-base ">
          I'm a Web Developer with extensive experience for over 5 years. My
          expertise is to create and design websites, graphic design, and more.
        </p>
        <div className="m-0">
          <Link to = '/project'>
          <button className="bg-[#F95353] text-white font-semibold px-4 py-2 rounded-full hover:bg-red-600">
            View Work
          </button>
          </Link>
          <Link to = '/contact'>
          <button className="bg-[#F95353] text-white font-semibold px-4 py-2 mt-8 rounded-full hover:bg-red-600 ml-5">
            Hire me
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
