import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout"; // Import Layout
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
import Project4 from "../images/Project4.png";
import Project5 from "../images/Project5.png";
import Project6 from "../images/Project6.png";
import Footer from "../components/Footer";

const projects = [
  { title: "Project One", image: Project1, github: "#", live: "#" },
  { title: "ShowGo", image: Project2, github: "#", live: "#" },
  {
    title: "Data Dock",
    description: "Save, manage, and share text snippets.",
    image: Project3,
    github: "https://github.com/Annkz/DataDock",
    live: "#",
  },
  { title: "Coupon Dunia", image: Project4, github: "#", live: "#" },
  { title: "Project Five", image: Project5, github: "#", live: "#" },
  {
    title: "RepoScout",
    description: "Search for GitHub users and view profiles.",
    image: Project6,
    github: "https://github.com/Annkz/RepoScout",
    live: "https://reposcoutt.netlify.app",
  },
];

const Work = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="min-h-screen bg-white px-8 md:px-16 pt-20">
        {/* Heading Section */}
        <div className="mt-25">
          <p className="text-sm uppercase font-normal text-black">Projects</p>
          <h1 className="text-3xl md:text-5xl font-normal mt-2 leading-tight">
            Some cool ideas brought <br /> to life through code.
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-38">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group block overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-w-full object-cover transition-all duration-300
                    brightness-40 lg:brightness-100 lg:group-hover:brightness-20
                    lg:group-hover:scale-99 px-2"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center 
                opacity-100 lg:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-lg text-white font-medium">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-lg mt-2">
                  {project.description}
                </p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg hover:text-gray-300 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg hover:text-gray-300 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Text Section Below Images */}
        <div className="mt-20 md:mt-36 text-left max-w-3xl px-4 sm:px-6 md:px-0">
          <h2 className="text-[11px]  sm:text-sm md:text-sm lg:text-2xl font-normal leading-relaxed">
            Like my style? Looking to boost your business or
            <br/>
            product with some awesome generative websites? 
            <br/>
             Make sure to hit me up.
          </h2>

          <button
            onClick={() => {
              window.scrollTo(0, 0); // Scroll to the top before navigating
              navigate("/contact");
            }}
            className="relative mt-15 sm:mt-25 mb-25 py-2 text-base text-[11px] sm:text-xs md:text-sm lg:text-xl font-medium text-black transition-all duration-300
                      focus:outline-none cursor-pointer group
                      max-sm:bg-gray-100 max-sm:px-1 max-sm:py-2 max-sm:rounded-md"
          >
            Send me a message
            <span className="block w-full border-b border-gray-300 max-sm:border-none relative">
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Work;
