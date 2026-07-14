import contact from "../data/contact";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-gray-300 -mt-6 mb-10 max-w-2xl mx-auto">
  I'm open to internships, full-time opportunities, and collaborations.
  Feel free to reach out!
</p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 rounded-xl p-6">
            <FaEnvelope className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>

            <a
              href={`mailto:${contact.email}`}
              className="text-gray-300 hover:text-cyan-400"
            >
              {contact.email}
            </a>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <FaPhone className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>

            <a
              href={`tel:${contact.phone}`}
              className="text-gray-300 hover:text-cyan-400"
            >
              {contact.phone}
            </a>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <FaGithub className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              Visit GitHub Profile
            </a>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <FaLinkedin className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              Connect on LinkedIn
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;