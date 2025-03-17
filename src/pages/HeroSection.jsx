import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeText, setActiveText] = useState("");
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="fixed top-0 left-0 w-full z-50">
          <Layout />
        </div>

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

        <section
          className="h-screen w-full flex flex-col justify-center items-center bg-gray-100 text-center px-4 fixed top-0 left-0 z-40 transition-opacity duration-700"
          style={{
            opacity: Math.min(1, Math.max(1 - scrollY / 400, 0.3)), 
          }}
        >
          <p className="uppercase tracking-widest text-gray-900 font-semibold mb-4 md:text-[18px]">
            Welcome
          </p>
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-medium leading-snug sm:leading-normal md:leading-tight text-black tracking-tight text-center max-w-3xl md:max-w-4xl md:mx-6 md:my-6">
            Hey I'm Ankit — your new favourite Frontend Developer. I specialize
            in designing sweet <em className="italic">interactive ⟳</em>{" "}
            experiences.
          </h1>
          <button
            onClick={(e) => handleClick(e, "Work", "/work")}
            className="mt-6 px-6 py-3 bg-black text-white rounded cursor-pointer"
          >
            Check out my work
          </button>
        </section>

        <Projects />
    </>
  );
};

export default HeroSection;
