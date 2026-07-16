import certifications from "../data/Certifications";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <FaCertificate className="text-cyan-400 text-4xl mb-4" />

              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;