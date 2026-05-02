export default function HomeIntro() {
    return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-6">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-stretch">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <img
                src="/profile.jpg"
                alt="Elijah-Amir Hodges"
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-white/10 bg-slate-900"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-2">
                Welcome
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-3">
                Hi, I’m Elijah.
              </h2>
              <p className="text-slate-300 leading-8 text-lg max-w-3xl">
                I’m a computer science student interested in systems, networking,
                security, and data-driven computing. I enjoy collaborative
                problem-solving and building technical work that feels useful,
                grounded, and practical.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200 mb-3">
            Announcement
          </p>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Incoming UCSB MS CS Student
          </h3>
          <p className="text-slate-200 leading-7">
            I’m currently refining my portfolio and preparing for graduate study,
            with a focus on systems-oriented computing and real-world technical work.
          </p>
        </div>
      </div>
    </section>
  );
}