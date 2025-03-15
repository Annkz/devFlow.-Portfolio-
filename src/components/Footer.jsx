import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
       
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 sm:mt-0">
          devFlow.
        </h2>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ankittt999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 transition"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://github.com/Annkz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 transition"
          >
            <FaGithub className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://leetcode.com/u/Annkit7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 transition"
          >
            <FaCode className="text-2xl sm:text-3xl" />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs sm:text-sm pt-10">
        © devFlow — 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
