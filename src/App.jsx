import PropTypes from "prop-types";

function Sprite({
  src,
  alt,
  delay = "0s",
  size = "w-16",
  left,
  right,
  center = false,
}) {
  const positionClass = center
    ? "left-1/2 -translate-x-1/2"
    : "";

  return (
    <img
      src={src}
      alt={alt}
      className={`pointer-events-none select-none absolute z-20 ${size} ${positionClass} pixel-float drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]`}
      style={{
        top: "-75px",
        left: center ? undefined : left,
        right: center ? undefined : right,
        animationDelay: delay,
        imageRendering: "pixelated",
      }}
    />
  );
}

Sprite.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  delay: PropTypes.string,
  size: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  center: PropTypes.bool,
};

function SectionShell({
  id,
  title,
  children,
  className = "",
  innerClassName = "",
  sprites = [],
}) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-12 ${className}`}>
      <div
        className={`relative overflow-visible rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 pt-10 ${innerClassName}`}
      >
        {sprites.map((sprite, index) => (
          <Sprite key={`${id}-${sprite.name || "sprite"}-${index}`} {...sprite} />
        ))}
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h3>
        {children}
      </div>
    </section>
  );
}

SectionShell.propTypes = {
  sprites: PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    delay: PropTypes.string,
    size: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    center: PropTypes.bool,
  })
),
};

export default function PortfolioWebsite() {
  const sectionSprites = {
  about: [
    {
      name: "Link",
      src: "/sprites/link.gif",
      alt: "Pixel Link sprite",
      left: "28px",
      delay: "0s",
      size: "w-14 md:w-16",
    },
  ],
  projects: [
    {
      name: "Cloud",
      src: "/sprites/cloud.gif",
      alt: "Pixel Cloud sprite",
      left: "36px",
      delay: "0.3s",
      size: "w-16 md:w-20",
    },
  ],
  skills: [
    {
      name: "Kirby",
      src: "/sprites/kirby.gif",
      alt: "Pixel Kirby sprite",
      left: "50%",
      delay: "0.6s",
      size: "w-14 md:w-16",
      center: true,
    },
  ],
  education: [
    {
      name: "Chocobo",
      src: "/sprites/chocobo.gif",
      alt: "Pixel Chocobo sprite",
      right: "42px",
      delay: "0.9s",
      size: "w-16 md:w-20",
    },
  ],
};

  const projects = [
    {
      title: "Course Review Web App",
      subtitle: "Team Software Engineering Project",
      description:
        "Built a collaborative web application for course reviews with a focus on front-end design, testing, and Git-based team workflow. Contributed unit tests, feature-branch development, and implementation support across the codebase.",
      tech: ["Java", "Testing", "Git", "Frontend Development"],
    },
    {
      title: "Security & Networking Projects",
      subtitle: "Applied Systems Work",
      description:
        "Includes a Python port scanner using sockets and an AES-based steganography tool, reflecting an interest in usable security, network behavior, and practical systems engineering.",
      tech: ["Python", "Sockets", "AES", "Cybersecurity"],
    },
  ];

  const skills = [
    "Python",
    "Java",
    "C++",
    "SQL",
    "Git/GitHub",
    "Unit Testing",
    "Networking",
    "Cybersecurity",
    "Cloud Computing",
    "Data Structures & Algorithms",
    "Database Systems",
    "Statistics",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <style>{`
        .pixel-float {
          animation: pixelFloat 2.8s ease-in-out infinite;
        }

        @keyframes pixelFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>

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

      <main>
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

        <SectionShell id="about" title="About" sprites={sectionSprites.about}>
          <p className="text-slate-300 leading-8 text-lg">
            My academic path has been shaped by collaboration and hands-on problem solving. From working
            through difficult math and systems concepts with peers to building team-based software projects,
            I have learned that strong engineering is rarely done in isolation.
          </p>
        </SectionShell>

        <SectionShell id="projects" title="Projects" sprites={sectionSprites.projects}>
          <p className="text-slate-400 mt-2 mb-8">A few examples of coursework and applied technical work.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition shadow-xl shadow-black/20"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300 mb-3">{project.subtitle}</p>
                <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
                <p className="text-slate-300 leading-7 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
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

        <SectionShell
          id="contact"
          title="Contact"
          className="pb-24"
          innerClassName="border-cyan-400/20 bg-cyan-400/10"
          sprites={sectionSprites.contact}
        >
          <p className="text-slate-200 text-lg leading-8 max-w-2xl mb-6">
            The best way to reach me is by email or LinkedIn. You can also view my GitHub for project code and technical work.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <a href="mailto:Elijahamirhodges@email.com" className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition">
              <p className="text-slate-400 mb-1">Email</p>
              <p className="text-white break-all">Elijahamirhodges@email.com</p>
            </a>
            <a href="https://github.com/ElijahAmir08" className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition">
              <p className="text-slate-400 mb-1">GitHub</p>
              <p className="text-white">github.com/ElijahAmir08</p>
            </a>
            <a href="https://www.linkedin.com/in/elijah-amir-hodges-652958241" className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 hover:bg-slate-950/60 transition">
              <p className="text-slate-400 mb-1">LinkedIn</p>
              <p className="text-white">linkedin.com/in/elijah-amir-hodges-652958241</p>
            </a>
          </div>
        </SectionShell>
      </main>
    </div>
  );
}