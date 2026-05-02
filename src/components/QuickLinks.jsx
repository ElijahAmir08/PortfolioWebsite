import { quickLinks } from "../data/siteData";

export default function QuickLinks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 hover:-translate-y-1 hover:bg-white/10 transition"
          >
            <p className="text-lg font-semibold text-white mb-1">{link.title}</p>
            <p className="text-sm text-slate-400">{link.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}