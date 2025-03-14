import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, path, name) => {
    e.preventDefault();
    setIsAnimating(true);

    setActivePage(name === "Home" ? "devFlow." : name.toLowerCase() + ".");

    setTimeout(() => {
      navigate(path);
      setTimeout(() => setIsAnimating(false), 600); 
    }, 70); 
  };

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: "-100%" }} 
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <h1 className="text-white text-xl font-bold">{activePage}</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center 
          gap-2 sm:gap-3 md:gap-4 lg:gap-5 bg-gray-100 px-3 md:px-4 lg:px-5 py-2 rounded-full shadow-md
          w-[85%] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={(e) => handleNavigation(e, link.path, link.name)}
            className={`px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 rounded-full text-sm md:text-base transition ${
              location.pathname === link.path
                ? "bg-gray-200 text-black"
                : "text-gray-700 hover:bg-gray-200 hover:text-black"
            }`}
          >
            {link.name}
          </NavLink>
        ))}
      </motion.nav>
    </>
  );
};

export default Navbar;
