export default function ContactSection() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12 pb-24">
      <div className="relative overflow-visible rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-10 pt-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h3>
        <p className="text-slate-200 text-lg leading-8 max-w-2xl mb-6">
          The best way to reach me is by email or LinkedIn. You can also view my GitHub for project code and technical work.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <a
            href="mailto:Elijahamirhodges@email.com"
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition"
          >
            <p className="text-slate-400 mb-1">Email</p>
            <p className="text-white break-all">Elijahamirhodges@email.com</p>
          </a>

          <a
            href="https://github.com/ElijahAmir08"
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition"
          >
            <p className="text-slate-400 mb-1">GitHub</p>
            <p className="text-white">github.com/ElijahAmir08</p>
          </a>

          <a
            href="https://www.linkedin.com/in/elijah-amir-hodges-652958241"
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition"
          >
            <p className="text-slate-400 mb-1">LinkedIn</p>
            <p className="text-white">linkedin.com/in/elijah-amir-hodges-652958241</p>
          </a>
        </div>
      </div>
    </section>
    );
}