import skills from "../data/skills";
import { motion } from "framer-motion";

function Skills() {
  const categories = [
    { title: "Programming Languages", items: skills.programmingLanguages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Web Technologies", items: skills.webTechnologies },
    { title: "Core Concepts", items: skills.coreConcepts },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-2 rounded-full border border-cyan-500 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;