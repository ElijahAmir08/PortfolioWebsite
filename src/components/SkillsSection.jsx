import SectionShell from "./SectionShell";
import { sectionSprites, skillGroups } from "../data/siteData";

export default function SkillsSection() {
  return (
    <SectionShell id="skills" title="Toolbox" sprites={sectionSprites.skills}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Loop through skill groups and create a card for each here: */}
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              {group.title}
            </h4>

            <div className="flex flex-wrap gap-2">
              {/* Loop through individual skills and visualize here: */}
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm rounded-full px-3 py-1.5 border border-white/10 text-slate-200 bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}