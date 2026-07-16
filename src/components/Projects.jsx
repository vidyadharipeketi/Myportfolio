import projects from "../data/Projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition flex flex-col"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <span className="mt-2 inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm w-fit">
                {project.status}
              </span>

              <p className="text-gray-300 mt-5 flex-grow leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-medium transition"
                  >
                    <FaGithub />
                    GitHub Repository
                  </a>
                ) : (
                  <button
                    disabled
                    className="bg-gray-700 text-gray-400 px-5 py-3 rounded-lg cursor-not-allowed"
                  >
                    Repository Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;