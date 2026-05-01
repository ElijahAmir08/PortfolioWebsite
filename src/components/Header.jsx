export default function Header() {
    return (
        <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Elijah-Amir Hodges</h1>
            <p className="text-sm text-slate-400">Computer Science Student | Systems, Networking, Data Science</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>
    );
}