export default function HeroSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.22em] text-sm text-cyan-300 mb-4">Resume-Ready Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Building reliable systems with a focus on performance, data, and real-world impact.
            </h2>
            <p className="text-lg text-slate-300 leading-8 max-w-2xl">
              I am a computer science student at the University of Virginia interested in networking,
              distributed systems, cybersecurity, and data-driven analysis of real systems. I enjoy
              collaborative problem-solving and building tools that are both practical and dependable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl px-5 py-3 bg-cyan-400 text-slate-950 font-medium shadow-lg shadow-cyan-400/20 hover:-translate-y-0.5 transition"
              >
                View Projects
              </a>
              <a
                href="mailto:ElijahAmirHodges@email.com"
                className="rounded-2xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition"
              >
                Contact Me
              </a>
              <a
                href="/ElijahAmir_Hodges_Resume.pdf"
                className="rounded-2xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition"
              >
                Download Résumé
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-900 p-5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2">Current Focus</p>
                <p className="text-lg font-medium">Systems-oriented computer science</p>
                <p className="text-sm text-slate-300 mt-2">Networking, cloud systems, security, and applied data analysis.</p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2">What I Value</p>
                <p className="text-sm text-slate-300 leading-7">
                  Clear thinking, strong teamwork, practical engineering, and building software that people can trust.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2">Looking For</p>
                <p className="text-sm text-slate-300 leading-7">
                  Internship, research, or early-career opportunities in systems, infrastructure, networking, or security.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
}