import internships from "../data/Internships";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Internships() {
  return (
    <section
      id="internships"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Internships
        </motion.h2>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-cyan-400 text-3xl mt-1" />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {internship.role}
                  </h3>

                  <p className="text-cyan-400 font-medium mt-1">
                    {internship.company}
                  </p>

                  <p className="text-gray-400 mb-4">
                    {internship.duration}
                  </p>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {internship.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Internships;