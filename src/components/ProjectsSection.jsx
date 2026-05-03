import SectionShell from "./SectionShell";
import { sectionSprites, projects } from "../data/siteData";

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Projects" sprites={sectionSprites.projects}>
      <p className="text-slate-400 mt-2 mb-8">A few examples of coursework and applied technical work.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Loop through projects and create a card for each here: */}
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition shadow-xl shadow-black/20"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300 mb-3">{project.subtitle}</p>
            <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
            <p className="text-slate-300 leading-7 mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {/* Create a tag for each technology used in the project here: */}
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs rounded-full border border-white/10 px-3 py-1.5 text-slate-300 bg-slate-900/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}