import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

import CertificationsSection from "@/components/CertificationsSection";
import { certifications } from "@/lib/data";

// Home Page Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {certifications.length > 0 && <CertificationsSection certifications={certifications} />}  
      <ContactSection />
    </div>
  );
}
