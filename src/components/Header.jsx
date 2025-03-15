import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeText, setActiveText] = useState("devFlow.");
  const navigate = useNavigate();

  const handleClick = (e, text, path) => {
    e.preventDefault();
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

      <header className="absolute top-8 left-7 lg:left-15 right-7 lg:right-15 flex justify-between items-center">
        <Link
          to="/"
          onClick={(e) => handleClick(e, "devFlow.", "/")}
          className="text-lg font-bold cursor-pointer"
        >
          devFlow.
        </Link>

        <button
          onClick={(e) => handleClick(e, "Contact", "/contact")}
          className="border border-white bg-white bg-opacity-90 shadow rounded 
                    px-4 py-2 text-sm 
                    sm:px-5 sm:py-2.5 sm:text-base 
                    md:px-6 md:py-3 md:text-sm cursor-pointer"
        >
          Hit me up
        </button>
      </header>
    </>
  );
};

export default Header;
