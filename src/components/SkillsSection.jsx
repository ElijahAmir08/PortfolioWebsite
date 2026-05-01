import SectionShell from "./SectionShell";
import { sectionSprites, skills } from "../data/siteData";

export default function SkillsSection() {
    return (
        <SectionShell id="skills" title="Skills" sprites={sectionSprites.skills}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-4 py-2 bg-slate-900 border border-white/10 text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </SectionShell>
    );
}