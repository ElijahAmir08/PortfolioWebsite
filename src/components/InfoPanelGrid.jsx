import { infoPanels } from "../data/siteData";

export default function InfoPanelGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {infoPanels.map((panel) => (
          <div
            key={panel.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-cyan-300 mb-3">
              {panel.title}
            </p>
            <p className="text-slate-300 leading-7">{panel.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}