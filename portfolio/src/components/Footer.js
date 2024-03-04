import React from "react";
import gitHub from "../image/github.png";
import linkedIn from "../image/linkindLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-3 ">
      <div className="container mx-auto text-center">
        <div className="flex  justify-center  items-center flex-col">
          <div className="">
            <p className="text-sm mb-4 mt-2">Frontend Developer | UI/UX Enthusiast</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourgithubusername"
              className="hover:text-gray-400"
            >
              <img className="h-8 w-8 rounded-full" src={gitHub} alt="Github" />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedinprofile"
              className="hover:text-gray-400"
            >
              <img
                className="h-8 w-8 rounded-full"
                src={linkedIn}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p>Contact: mgrzsumit19@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
