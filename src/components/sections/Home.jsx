import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Sunil Singh
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
          I am an aspiring full-stack developer passionate about creating clean, scalable web applications. My goal is to build solutions that not only deliver exceptional performance but also provide a seamless and enjoyable user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <div class="flex gap-5 justify-center items-center">
              <a
                href="mailto:sunilsingh09012@gmail.com"
                className="text-blue-500 text-4xl cursor-pointer hover:scale-110 hover:text-cyan-500 transition-all duration-200"
              >
                <MdEmail />
              </a>
              <a
                href="https://github.com/sunilsinghx/"
                className="text-blue-500 text-4xl cursor-pointer hover:scale-110 hover:text-cyan-500 transition-all duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/singh-sunil/"
                className="text-blue-500 text-4xl cursor-pointer hover:scale-110 hover:text-cyan-500 transition-all duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.leetcode.com/sunilsinghx/"
                className="text-blue-500 text-4xl cursor-pointer hover:scale-110 hover:text-cyan-500 transition-all duration-200"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
