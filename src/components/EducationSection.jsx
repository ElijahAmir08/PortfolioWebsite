import SectionShell from "./SectionShell";
import { sectionSprites } from "../data/siteData";

export default function EducationSection() {
  return (
    <SectionShell id="education" title="Education" sprites={sectionSprites.education}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.18em] mb-2">University of Virginia</p>
          <h4 className="text-xl font-semibold mb-2">B.S. in Computer Science</h4>
          <p className="text-slate-300 leading-7">
            Relevant areas: data structures and algorithms, computer systems, networking,
            databases, cybersecurity, and statistics.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.18em] mb-2">Additional Experience</p>
          <h4 className="text-xl font-semibold mb-2">Hands-on Technical & Service Experience</h4>
          <p className="text-slate-300 leading-7">
            Includes IT exposure through Operation Smile, collaborative academic project work,
            and customer-facing experience that strengthened communication and reliability.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}