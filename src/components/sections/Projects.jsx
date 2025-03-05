import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex item-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">BlogApp</h3>
              <p className="text-gray-400 mb-4">
              Full-stack MERN blog app with seamless CRUD operations for blog posts.Used Docker Compose for orchestration
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js","Node.js","MongoDB","Docker"].map((tech, key) => (
                  <span
                  key={key}
                  className="
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                >
                  {tech}
                </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sunilsinghx/blogapp"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ChatApp </h3>
              <p className="text-gray-400 mb-4">
              Scalable chat platform supporting real-time messaging, presence,
              and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Go", "React.js", "Websocket", "React Router"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sunilsinghx/go-chatapp"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">SocialMedia</h3>
              <p className="text-gray-400 mb-4">
              Built a social media app with user authentication, post creation, and social interactions using Django and React.js
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Django", "React.js", "Django DRF", "JS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sunilsinghx/social-media"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">CLI-Todos</h3>
              <p className="text-gray-400 mb-4">
              A simple CLI To-Do app in Go that allows users to add, list, and delete tasks, with task management stored in memory during runtime.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Go",].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/sunilsinghx/go-todo-cli"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
