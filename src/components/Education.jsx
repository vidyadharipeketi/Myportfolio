import education from "../data/Education";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 border border-slate-700"
            >
              <div className="flex items-start gap-4">

                <FaGraduationCap className="text-cyan-400 text-3xl mt-1" />

                <div className="flex-1">

                  <h3 className="text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-gray-200 mt-3 font-medium">
                    {item.institution}
                  </p>

                  <p className="flex items-center gap-2 text-gray-400 mt-2">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    {item.location}
                  </p>

                  <p className="text-cyan-400 font-medium mt-3">
                    {item.score}
                  </p>

                  <p className="text-gray-400 mt-1">
                    {item.year}
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;