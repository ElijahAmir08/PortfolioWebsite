import "./App.css";
import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import QuickLinks from "./components/QuickLinks";
import InfoPanelGrid from "./components/InfoPanelGrid";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";

export default function App() {
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

      <Header />

      <main>
        <HomeIntro />
        <QuickLinks />
        <InfoPanelGrid />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
      </main>
    </div>
  );
}