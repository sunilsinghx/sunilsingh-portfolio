import RevealOnScroll from "../RevealOnScroll";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get in Touch
          </h2>

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
            </div>
          </div>

        
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
