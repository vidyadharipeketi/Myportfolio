import profile from "../data/Profile";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-xl font-medium tracking-wide mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {profile.name}
          </h1>

          <h2 className="text-3xl text-cyan-300 font-semibold mt-5">
            {profile.title}
          </h2>

          <p className="text-gray-300 text-lg leading-8 mt-6 max-w-xl">
            {profile.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            {/* View Resume */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📄 View Resume
            </a>

            {/* Download Resume */}
            <a
              href={profile.resume}
              download
              className="border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              ⬇ Download Resume
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="bg-white text-slate-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              📞 Contact Me
            </a>

          </div>

        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">

          <img
            src={profile.image}
            alt={profile.name}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;