import "./App.css";
// Import all child components here:
import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import QuickLinks from "./components/QuickLinks";
import InfoPanelGrid from "./components/InfoPanelGrid";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import RelocationPanel from "./components/RelocationPanel";

export default function App() {
  /**
   * This is the main App component that serves as the root of the application.
   * It imports and renders all the child components that make up the different sections of the portfolio website.
   */
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Define global style for pixel gif's floating animation */}
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
      {/* Define homepage structure/ordering here */}
      <main>
        <HomeIntro />
        <QuickLinks />
        <InfoPanelGrid />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <RelocationPanel />
      </main>
    </div>
  );
}