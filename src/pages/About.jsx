import React from "react";
import Layout from "../components/Layout";
import { FaLinkedin, FaGithub, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiLeetcode,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import {
  MdStorage,
  MdComputer,
  MdMemory,
  MdDeveloperMode,
} from "react-icons/md"; 
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen flex items-start justify-start bg-gray-100 px-8 sm:px-10 md:px-16 lg:px-16 pt-24 sm:pt-28">
          <div className="max-w-4xl w-full">
            <p className="text-sm font-normal uppercase tracking-widest text-gray-800 sm:mt-10">
              About
            </p>

            <h1 className="text-xl sm:text-4xl font-normal leading-tight mt-5">
              Hi, I'm Ankit! A passionate Frontend Developer. I love building
              interactive, responsive, and user-friendly web applications.
            </h1>

            <div className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-6 mt-6 sm:mt-8 text-gray-800 text-lg gap-3">
              {[
                {
                  name: "LinkedIn",
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/ankittt999/",
                },
                {
                  name: "LeetCode",
                  icon: <SiLeetcode />,
                  link: "https://leetcode.com/u/Annkit7/",
                },
                {
                  name: "GitHub",
                  icon: <FaGithub />,
                  link: "https://github.com/Annkz",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-3 rounded-md text-sm shadow-sm hover:bg-gray-300 transition"
                >
                  {social.icon} {social.name}
                </a>
              ))}
            </div>

            {/* Technical Skills Title */}
            <p className="text-sm font-normal uppercase tracking-widest text-gray-800 mt-16 sm:mt-28">
              My Technical Skills
            </p>

            {/* Technical Skills List */}
            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap mt-6">
              {[
                { name: "C++", icon: <SiCplusplus /> },
                { name: "Java", icon: <FaJava /> },
                { name: "DSA", icon: <SiLeetcode /> },
                { name: "C", icon: <CgCPlusPlus /> },
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss3 /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "React", icon: <SiReact /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "SQL", icon: <DiDatabase /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <FaGithub /> },
              ].map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-3 rounded-md text-sm shadow-sm justify-center"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>

            {/* Course Work Title */}
            <p className="text-sm font-normal uppercase tracking-widest text-gray-800 mt-16 sm:mt-28">
              Course Work
            </p>

            {/* Course Work List - Icon + Title inside background, paragraph separate */}
            <div className="mt-6 mb-30 space-y-4">
              {[
                {
                  name: "OOPS",
                  icon: <MdMemory />,
                  description:
                    "Principles (Encapsulation, Abstraction, Inheritance, Polymorphism), Design Patterns.",
                },
                {
                  name: "DBMS",
                  icon: <SiMysql />,
                  description: "SQL, MongoDB, Firebase.",
                },
                {
                  name: "Software Engineering",
                  icon: <MdDeveloperMode />,
                  description: "Agile Methodology, SDLC, Design Patterns.",
                },
                {
                  name: "Computer Networks",
                  icon: <MdComputer />,
                  description: "HTTP, TCP/IP.",
                },
                {
                  name: "Operating Systems",
                  icon: <MdStorage />,
                  description: "Linux Basics.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                >
                  {/* Icon + Course Name */}
                  <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-3 rounded-md text-sm shadow-sm">
                    {course.icon} {course.name}
                  </span>
                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base">
                    - {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>

      <div className="pb-17">
        <Footer/>
      </div>
    </>
  );
};

export default About;
