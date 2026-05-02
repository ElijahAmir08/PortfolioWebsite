import SectionShell from "./SectionShell";
import { sectionSprites } from "../data/siteData";

export default function AboutSection() {
    return (
        <SectionShell id="about" title="About" sprites={sectionSprites.about}>
          <p className="text-slate-300 leading-8 text-lg">
            My academic path has been shaped by collaboration and hands-on problem solving. From working
            through difficult math and systems concepts with peers to building team-based software projects,
            I have learned that strong engineering is rarely done in isolation.
          </p>
        </SectionShell>
    );
}