function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
      <h1 className="text-xl font-bold text-cyan-400">
        Syamsul Hadi.dev
      </h1>

      <div className="hidden md:flex gap-8 text-sm text-slate-300">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
        <a href="#footer" className="hover:text-cyan-400">Footer</a>
      </div>
    </nav>
  )
}

export default Navbar