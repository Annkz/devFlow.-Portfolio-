import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from "../images/Project1.png";
import Project3 from "../images/Project3.png";
import WhatIDo from "./WhatIDo"
import Footer from "./Footer";

const projects = [
  {
    title: "Data Dock",
    description: "Save, manage, and share text snippets.",
    image: Project1,
    github: "https://github.com/Annkz/DataDock",
    live: "https://your-paste-app-live-link.com",
  },
  {
    title: "RepoScout",
    description: "Search for GitHub users and view profiles.",
    image: Project3,
    github: "https://github.com/Annkz/RepoScout",
    live: "https://reposcoutt.netlify.app",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-white py-16 relative z-50 mt-[100vh] data-scroll-section">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-normal text-center mb-6 sm:mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group block overflow-hidden rounded-lg shadow-lg"
            >
              <div className="w-full h-auto relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-w-full object-cover transition-all duration-300
                    brightness-40 sm:brightness-100 sm:group-hover:brightness-50
                    sm:group-hover:scale-95 px-2"
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-white text-xl sm:text-2xl font-normal">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-lg mt-2">
                  {project.description}
                </p>

                <div className="flex space-x-4 sm:space-x-6 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg sm:text-2xl hover:text-gray-300 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg sm:text-2xl hover:text-gray-300 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/work"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-normal rounded-md hover:bg-gray-900 transition"
          >
            All Projects
          </a>
        </div>
      </div>

      <div className="mt-30">
        <WhatIDo/>
      </div>
      
      <div className="mt-30">
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
