function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
         Peketi Vidyadhari
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#internships" className="hover:text-cyan-400">Internships</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-cyan-400">Certifications</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;