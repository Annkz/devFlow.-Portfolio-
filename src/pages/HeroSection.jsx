import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout"; // Import Layout

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeText, setActiveText] = useState("");
  const navigate = useNavigate();

  const handleClick = (e, text, path) => {
    e.preventDefault();
    setIsAnimating(true);
    setActiveText(text); // Set the correct text for animation

    setTimeout(() => {
      navigate(path);
    }, 700); // Hold the black screen before navigating

    setTimeout(() => {
      setIsAnimating(false);
    }, 1400); // Ensures slide-up completes
  };

  return (
    <Layout>
      {/* Animation Overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }} // Smooth slide-up effect
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.7 }} // Delayed slide-up
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <h1 className="text-white text-xl font-bold">{activeText}</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
        <p className="uppercase tracking-widest text-gray-900 font-semibold mb-4">
          Welcome
        </p>
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-medium leading-snug sm:leading-normal md:leading-tight text-black tracking-tight text-center max-w-3xl md:max-w-4xl">
          Hey I'm Ankit — your new favourite Frontend Developer. I specialize in
          designing sweet <em className="italic">interactive ⟳</em> experiences.
        </h1>
        <button
          onClick={(e) => handleClick(e, "Work", "/work")}
          className="mt-6 px-6 py-3 bg-black text-white rounded cursor-pointer"
        >
          Check out my work
        </button>
      </section>
    </Layout>
  );
};

export default HeroSection;
