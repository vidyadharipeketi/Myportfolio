import profile from "../data/profile";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 rounded-2xl shadow-lg p-8"
        >
          <p className="text-lg leading-8 text-gray-300">
            {profile.description}
          </p>

          <h3 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">
            Career Objective
          </h3>

          <p className="text-lg leading-8 text-gray-300">
            {profile.objective}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;