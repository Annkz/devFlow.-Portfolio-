import React from "react";
import { useNavigate } from "react-router-dom";

const WhatIDo = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="container mt-[-40px] mx-auto flex flex-col md:flex-row items-start md:items-start justify-between md:space-x-120">
        <h2 className="text-[15px] sm:text-xl md:text-xl font-normal mb-6 md:mb-0 md:w-1/4 md:ml-4">
          What I do
        </h2>

        <div className="md:w-3/4 mr-4 text-base sm:text-lg md:text-2xl leading-7 sm:leading-8 md:leading-[45px] text-gray-800 font-normal">
          <p>
            As a passionate <strong>frontend developer</strong>, I thrive on
            crafting <strong>scalable web applications</strong> that blend
            functionality with seamless user experience.
          </p>
          <p className="mt-4">
            From <strong>frontend UI design</strong> to{" "}
            <strong>backend API development</strong>, I continuously{" "}
            <strong>improve my skills</strong> and explore{" "}
            <strong>new technologies</strong> to deliver the best solutions.
            Currently, I am <strong>enhancing my expertise in Next.js</strong>{" "}
            while working on innovative projects.
          </p>

          <button
            onClick={() => {
              window.scrollTo(0, 0); 
              navigate("/about");
            }}
            className="relative mt-6 py-2 text-base sm:text-lg md:text-xl font-medium text-black transition-all duration-300
                      focus:outline-none cursor-pointer group
                      max-sm:bg-gray-100 max-sm:px-1 max-sm:py-2 max-sm:rounded-md"
          >
            Get to know more about me
            <span className="block w-full border-b border-gray-300 max-sm:border-none relative">
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
