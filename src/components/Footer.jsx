import React, {useState} from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeText, setActiveText] = useState("devFlow.");
  const navigate = useNavigate();

  const handleClick = (e, text, path) => {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to the top before navigating
    setIsAnimating(true);
    setActiveText(text);

    setTimeout(() => {
      navigate(path);
    }, 700);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1400);
  };

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.7 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <h1 className="text-white text-xl font-bold">{activeText}</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" 
           onClick={(e) => 
           
           handleClick(e, "devFlow.", "/")}>
            <h2 className="lg:ml-9 text-2xl sm:text-3xl lg:text-4xl md:ml-4 font-bold mt-4 sm:mt-0">
              devFlow.
            </h2>
          </Link>

          <div className="flex space-x-4 mt-4 sm:mt-0 lg:mr-15 md:mr-4 ">
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
          © devFlow — 2025. All rights reserved. <br /> [Ankit]
        </div>
      </footer>
    </>
  );
};

export default Footer;
